/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as externs from '@firebase/auth-types-exp';

import {
  getAccountInfo,
  ProviderUserInfo
} from '../../api/account_management/account';
import { User } from '../../model/user';
import { AuthErrorCode } from '../errors';
import { assert } from '../util/assert';
import { _logoutIfInvalidated } from './invalidation';
import { UserMetadata } from './user_metadata';

export async function _reloadWithoutSaving(user: User): Promise<void> {
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(
    user,
    getAccountInfo(auth, { idToken })
  );

  assert(response?.users.length, AuthErrorCode.INTERNAL_ERROR, {
    appName: auth.name
  });

  const coreAccount = response.users[0];

  user._notifyReloadListener(coreAccount);

  const newProviderData = coreAccount.providerUserInfo?.length
    ? extractProviderData(coreAccount.providerUserInfo)
    : [];

  const providerData = mergeProviderData(user.providerData, newProviderData);

  // Preserves the non-nonymous status of the stored user, even if no more
  // credentials (federated or email/password) are linked to the user. If
  // the user was previously anonymous, then use provider data to update.
  // On the other hand, if it was not anonymous before, it should never be
  // considered anonymous now.
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous =
    !(user.email && coreAccount.passwordHash) && !providerData?.length;
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;

  const updates: Partial<User> = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };

  Object.assign(user, updates);
}

/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */
export async function reload(user: externs.User): Promise<void> {
  const userInternal: User = user as User;
  await _reloadWithoutSaving(userInternal);

  // Even though the current user hasn't changed, update
  // current user will trigger a persistence update w/ the
  // new info.
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}

function mergeProviderData(
  original: externs.UserInfo[],
  newData: externs.UserInfo[]
): externs.UserInfo[] {
  const deduped = original.filter(
    o => !newData.some(n => n.providerId === o.providerId)
  );
  return [...deduped, ...newData];
}

function extractProviderData(
  providers: ProviderUserInfo[]
): externs.UserInfo[] {
  return providers.map(({ providerId, ...provider }) => {
    return {
      providerId,
      uid: provider.rawId || '',
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
