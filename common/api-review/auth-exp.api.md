## API Report File for "@firebase/auth-exp"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Auth } from '@firebase/auth-types-exp';
import { CompleteFn } from '@firebase/util';
import { ErrorFn } from '@firebase/util';
import * as externs from '@firebase/auth-types-exp';
import { FirebaseApp } from '@firebase/app-types-exp';
import { FirebaseError } from '@firebase/util';
import { ProviderId } from '@firebase/auth-types-exp';
import { Unsubscribe } from '@firebase/util';
import { UserCredential } from '@firebase/auth-types-exp';

// @public (undocumented)
export class ActionCodeURL implements externs.ActionCodeURL {
    constructor(actionLink: string);
    // (undocumented)
    readonly apiKey: string;
    // (undocumented)
    readonly code: string;
    // (undocumented)
    readonly continueUrl: string | null;
    // (undocumented)
    readonly languageCode: string | null;
    // (undocumented)
    readonly operation: externs.Operation;
    // (undocumented)
    static parseLink(link: string): externs.ActionCodeURL | null;
    // (undocumented)
    readonly tenantId: string | null;
}

// @public (undocumented)
export function applyActionCode(auth: externs.Auth, oobCode: string): Promise<void>;

// @public (undocumented)
export class AuthCredential {
    protected constructor(providerId: string, signInMethod: string);
    // Warning: (ae-forgotten-export) The symbol "AuthCore" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "PhoneOrOauthTokenResponse" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    _getIdTokenResponse(_auth: AuthCore): Promise<PhoneOrOauthTokenResponse>;
    // (undocumented)
    _getReauthenticationResolver(_auth: AuthCore): Promise<IdTokenResponse>;
    // Warning: (ae-forgotten-export) The symbol "IdTokenResponse" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    _linkToIdToken(_auth: AuthCore, _idToken: string): Promise<IdTokenResponse>;
    // (undocumented)
    readonly providerId: string;
    // (undocumented)
    readonly signInMethod: string;
    // (undocumented)
    toJSON(): object;
}

// @public (undocumented)
export const browserLocalPersistence: externs.Persistence;

// @public (undocumented)
export const browserPopupRedirectResolver: externs.PopupRedirectResolver;

// @public (undocumented)
export const browserSessionPersistence: externs.Persistence;

// @public (undocumented)
export function checkActionCode(auth: externs.Auth, oobCode: string): Promise<externs.ActionCodeInfo>;

// @public (undocumented)
export function confirmPasswordReset(auth: externs.Auth, oobCode: string, newPassword: string): Promise<void>;

// @public (undocumented)
export function createUserWithEmailAndPassword(auth: externs.Auth, email: string, password: string): Promise<externs.UserCredential>;

// @public (undocumented)
export function deleteUser(user: externs.User): Promise<void>;

// @public (undocumented)
export class EmailAuthCredential extends AuthCredential implements externs.AuthCredential {
    // (undocumented)
    readonly email: string;
    // (undocumented)
    static _fromEmailAndCode(email: string, oobCode: string, tenantId?: string | null): EmailAuthCredential;
    // (undocumented)
    static _fromEmailAndPassword(email: string, password: string): EmailAuthCredential;
    // (undocumented)
    static fromJSON(json: object | string): EmailAuthCredential | null;
    // (undocumented)
    _getIdTokenResponse(auth: AuthCore): Promise<IdTokenResponse>;
    // (undocumented)
    _getReauthenticationResolver(auth: AuthCore): Promise<IdTokenResponse>;
    // (undocumented)
    _linkToIdToken(auth: AuthCore, idToken: string): Promise<IdTokenResponse>;
    // (undocumented)
    readonly password: string;
    // (undocumented)
    readonly tenantId: string | null;
    // (undocumented)
    toJSON(): object;
}

// @public (undocumented)
export class EmailAuthProvider implements externs.EmailAuthProvider {
    // (undocumented)
    static credential(email: string, password: string): EmailAuthCredential;
    // (undocumented)
    static credentialWithLink(email: string, emailLink: string): EmailAuthCredential;
    // (undocumented)
    static readonly EMAIL_LINK_SIGN_IN_METHOD = externs.SignInMethod.EMAIL_LINK;
    // (undocumented)
    static readonly EMAIL_PASSWORD_SIGN_IN_METHOD = externs.SignInMethod.EMAIL_PASSWORD;
    // (undocumented)
    static readonly PROVIDER_ID = externs.ProviderId.PASSWORD;
    // (undocumented)
    readonly providerId = externs.ProviderId.PASSWORD;
}

// @public (undocumented)
export class FacebookAuthProvider extends OAuthProvider {
    // (undocumented)
    static credential(accessToken: string): externs.OAuthCredential;
    // (undocumented)
    static credentialFromError(error: FirebaseError): externs.OAuthCredential | null;
    // (undocumented)
    static credentialFromResult(userCredential: externs.UserCredential): externs.OAuthCredential | null;
    // (undocumented)
    static readonly FACEBOOK_SIGN_IN_METHOD = externs.SignInMethod.FACEBOOK;
    // (undocumented)
    static readonly PROVIDER_ID = externs.ProviderId.FACEBOOK;
    // (undocumented)
    readonly providerId = externs.ProviderId.FACEBOOK;
}

// @public (undocumented)
export function fetchSignInMethodsForEmail(auth: externs.Auth, email: string): Promise<string[]>;

// @public (undocumented)
export function getAdditionalUserInfo(userCredential: externs.UserCredential): externs.AdditionalUserInfo | null;

// @public (undocumented)
export function getAuth(app?: FirebaseApp): Auth;

// @public (undocumented)
export function getIdToken(user: externs.User, forceRefresh?: boolean): Promise<string>;

// @public (undocumented)
export function getIdTokenResult(externUser: externs.User, forceRefresh?: boolean): Promise<externs.IdTokenResult>;

// @public (undocumented)
export function getMultiFactorResolver(auth: externs.Auth, errorExtern: externs.MultiFactorError): externs.MultiFactorResolver;

// @public (undocumented)
export function getRedirectResult(authExtern: externs.Auth, resolverExtern: externs.PopupRedirectResolver): Promise<externs.UserCredential | null>;

// @public (undocumented)
export class GithubAuthProvider extends OAuthProvider {
    // (undocumented)
    static credential(accessToken: string): externs.OAuthCredential;
    // (undocumented)
    static credentialFromError(error: FirebaseError): externs.OAuthCredential | null;
    // (undocumented)
    static credentialFromResult(userCredential: externs.UserCredential): externs.OAuthCredential | null;
    // (undocumented)
    static readonly GITHUB_SIGN_IN_METHOD = externs.SignInMethod.GITHUB;
    // (undocumented)
    static readonly PROVIDER_ID = externs.ProviderId.GITHUB;
    // (undocumented)
    readonly providerId = externs.ProviderId.GITHUB;
}

// @public (undocumented)
export class GoogleAuthProvider extends OAuthProvider {
    // (undocumented)
    static credential(idToken?: string | null, accessToken?: string | null): externs.OAuthCredential;
    // (undocumented)
    static credentialFromError(error: FirebaseError): externs.OAuthCredential | null;
    // (undocumented)
    static credentialFromResult(userCredential: externs.UserCredential): externs.OAuthCredential | null;
    // (undocumented)
    static readonly GOOGLE_SIGN_IN_METHOD = externs.SignInMethod.GOOGLE;
    // (undocumented)
    static readonly PROVIDER_ID = externs.ProviderId.GOOGLE;
    // (undocumented)
    readonly providerId = externs.ProviderId.GOOGLE;
}

// @public (undocumented)
export const indexedDBLocalPersistence: externs.Persistence;

// Warning: (ae-forgotten-export) The symbol "Dependencies" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function initializeAuth(app?: FirebaseApp, deps?: Dependencies): externs.Auth;

// @public (undocumented)
export const inMemoryPersistence: externs.Persistence;

// @public (undocumented)
export function isSignInWithEmailLink(auth: externs.Auth, emailLink: string): boolean;

// @public (undocumented)
export function linkWithCredential(userExtern: externs.User, credentialExtern: externs.AuthCredential): Promise<UserCredential>;

// @public (undocumented)
export function linkWithPhoneNumber(userExtern: externs.User, phoneNumber: string, appVerifier: externs.ApplicationVerifier): Promise<externs.ConfirmationResult>;

// @public (undocumented)
export function linkWithPopup(userExtern: externs.User, provider: externs.AuthProvider, resolverExtern: externs.PopupRedirectResolver): Promise<externs.UserCredential>;

// @public (undocumented)
export function linkWithRedirect(userExtern: externs.User, provider: externs.AuthProvider, resolverExtern: externs.PopupRedirectResolver): Promise<never>;

// @public (undocumented)
export function multiFactor(user: externs.User): externs.MultiFactorUser;

// @public (undocumented)
export class OAuthCredential extends AuthCredential implements externs.OAuthCredential {
    // (undocumented)
    accessToken?: string;
    // (undocumented)
    static fromJSON(json: string | object): OAuthCredential | null;
    // Warning: (ae-forgotten-export) The symbol "OAuthCredentialParams" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static _fromParams(params: OAuthCredentialParams): OAuthCredential;
    // (undocumented)
    _getIdTokenResponse(auth: AuthCore): Promise<IdTokenResponse>;
    // (undocumented)
    _getReauthenticationResolver(auth: AuthCore): Promise<IdTokenResponse>;
    // (undocumented)
    idToken?: string;
    // (undocumented)
    _linkToIdToken(auth: AuthCore, idToken: string): Promise<IdTokenResponse>;
    // (undocumented)
    nonce?: string;
    // (undocumented)
    secret?: string;
    // (undocumented)
    toJSON(): object;
}

// @public (undocumented)
export class OAuthProvider implements externs.AuthProvider {
    constructor(providerId: string);
    // (undocumented)
    addScope(scope: string): externs.AuthProvider;
    // Warning: (ae-forgotten-export) The symbol "CredentialParameters" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    credential(params: CredentialParameters): externs.OAuthCredential;
    // (undocumented)
    static credentialFromJSON(json: object | string): externs.OAuthCredential;
    // (undocumented)
    defaultLanguageCode: string | null;
    // (undocumented)
    getCustomParameters(): CustomParameters;
    // (undocumented)
    getScopes(): string[];
    // (undocumented)
    readonly providerId: string;
    // Warning: (ae-forgotten-export) The symbol "CustomParameters" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    setCustomParameters(customOAuthParameters: CustomParameters): externs.AuthProvider;
    // (undocumented)
    setDefaultLanguage(languageCode: string | null): void;
}

// @public (undocumented)
export function onAuthStateChanged(auth: externs.Auth, nextOrObserver: externs.NextOrObserver<externs.User>, error?: ErrorFn, completed?: CompleteFn): Unsubscribe;

// @public (undocumented)
export function onIdTokenChanged(auth: externs.Auth, nextOrObserver: externs.NextOrObserver<externs.User>, error?: ErrorFn, completed?: CompleteFn): Unsubscribe;

// @public (undocumented)
export function parseActionCodeURL(link: string): externs.ActionCodeURL | null;

// @public (undocumented)
export class PhoneAuthCredential extends AuthCredential implements externs.PhoneAuthCredential {
    // (undocumented)
    static fromJSON(json: object | string): PhoneAuthCredential | null;
    // (undocumented)
    static _fromTokenResponse(phoneNumber: string, temporaryProof: string): PhoneAuthCredential;
    // (undocumented)
    static _fromVerification(verificationId: string, verificationCode: string): PhoneAuthCredential;
    // (undocumented)
    _getIdTokenResponse(auth: AuthCore): Promise<PhoneOrOauthTokenResponse>;
    // (undocumented)
    _getReauthenticationResolver(auth: AuthCore): Promise<IdTokenResponse>;
    // (undocumented)
    _linkToIdToken(auth: AuthCore, idToken: string): Promise<IdTokenResponse>;
    // Warning: (ae-forgotten-export) The symbol "SignInWithPhoneNumberRequest" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    _makeVerificationRequest(): SignInWithPhoneNumberRequest;
    // (undocumented)
    toJSON(): object;
}

// @public (undocumented)
export class PhoneAuthProvider implements externs.PhoneAuthProvider {
    constructor(auth: AuthCore);
    // (undocumented)
    static credential(verificationId: string, verificationCode: string): PhoneAuthCredential;
    // (undocumented)
    static credentialFromResult(userCredential: externs.UserCredential): externs.AuthCredential | null;
    // (undocumented)
    static readonly PHONE_SIGN_IN_METHOD = externs.SignInMethod.PHONE;
    // (undocumented)
    static readonly PROVIDER_ID = externs.ProviderId.PHONE;
    // (undocumented)
    readonly providerId = externs.ProviderId.PHONE;
    // (undocumented)
    verifyPhoneNumber(phoneOptions: externs.PhoneInfoOptions | string, applicationVerifier: externs.ApplicationVerifier): Promise<string>;
}

// @public (undocumented)
export class PhoneMultiFactorGenerator implements externs.PhoneMultiFactorGenerator {
    // (undocumented)
    static assertion(credential: externs.PhoneAuthCredential): externs.PhoneMultiFactorAssertion;
}

// @public (undocumented)
export function reauthenticateWithCredential(userExtern: externs.User, credentialExtern: externs.AuthCredential): Promise<externs.UserCredential>;

// @public (undocumented)
export function reauthenticateWithPhoneNumber(userExtern: externs.User, phoneNumber: string, appVerifier: externs.ApplicationVerifier): Promise<externs.ConfirmationResult>;

// @public (undocumented)
export function reauthenticateWithPopup(userExtern: externs.User, provider: externs.AuthProvider, resolverExtern: externs.PopupRedirectResolver): Promise<externs.UserCredential>;

// @public (undocumented)
export function reauthenticateWithRedirect(userExtern: externs.User, provider: externs.AuthProvider, resolverExtern: externs.PopupRedirectResolver): Promise<never>;

// Warning: (ae-forgotten-export) The symbol "ApplicationVerifier" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export class RecaptchaVerifier implements externs.RecaptchaVerifier, ApplicationVerifier {
    // Warning: (ae-forgotten-export) The symbol "Parameters" needs to be exported by the entry point index.d.ts
    constructor(containerOrId: HTMLElement | string, parameters: Parameters_2, auth: AuthCore);
    // (undocumented)
    clear(): void;
    // Warning: (ae-forgotten-export) The symbol "ReCaptchaLoader" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    readonly _recaptchaLoader: ReCaptchaLoader;
    // (undocumented)
    render(): Promise<number>;
    // (undocumented)
    _reset(): void;
    // (undocumented)
    readonly type = "recaptcha";
    // (undocumented)
    verify(): Promise<string>;
    }

// @public (undocumented)
export function reload(externUser: externs.User): Promise<void>;

// @public (undocumented)
export function sendEmailVerification(userExtern: externs.User, actionCodeSettings?: externs.ActionCodeSettings | null): Promise<void>;

// @public (undocumented)
export function sendPasswordResetEmail(auth: externs.Auth, email: string, actionCodeSettings?: externs.ActionCodeSettings): Promise<void>;

// @public (undocumented)
export function sendSignInLinkToEmail(auth: externs.Auth, email: string, actionCodeSettings?: externs.ActionCodeSettings): Promise<void>;

// @public (undocumented)
export function setPersistence(auth: externs.Auth, persistence: externs.Persistence): void;

// @public (undocumented)
export function signInAnonymously(auth: externs.Auth): Promise<externs.UserCredential>;

// @public (undocumented)
export function signInWithCredential(auth: externs.Auth, credential: externs.AuthCredential): Promise<externs.UserCredential>;

// @public (undocumented)
export function signInWithCustomToken(authExtern: externs.Auth, customToken: string): Promise<externs.UserCredential>;

// @public (undocumented)
export function signInWithEmailAndPassword(auth: externs.Auth, email: string, password: string): Promise<externs.UserCredential>;

// @public (undocumented)
export function signInWithEmailLink(auth: externs.Auth, email: string, emailLink?: string): Promise<externs.UserCredential>;

// @public (undocumented)
export function signInWithPhoneNumber(auth: externs.Auth, phoneNumber: string, appVerifier: externs.ApplicationVerifier): Promise<externs.ConfirmationResult>;

// @public (undocumented)
export function signInWithPopup(auth: externs.Auth, provider: externs.AuthProvider, resolverExtern: externs.PopupRedirectResolver): Promise<externs.UserCredential>;

// @public (undocumented)
export function signInWithRedirect(auth: externs.Auth, provider: externs.AuthProvider, resolverExtern: externs.PopupRedirectResolver): Promise<never>;

// @public (undocumented)
export function signOut(auth: externs.Auth): Promise<void>;

// @public (undocumented)
export class TwitterAuthProvider extends OAuthProvider {
    // (undocumented)
    static credential(token: string, secret: string): externs.OAuthCredential;
    // (undocumented)
    static credentialFromError(error: FirebaseError): externs.OAuthCredential | null;
    // (undocumented)
    static credentialFromResult(userCredential: externs.UserCredential): externs.OAuthCredential | null;
    // (undocumented)
    static readonly PROVIDER_ID = externs.ProviderId.TWITTER;
    // (undocumented)
    readonly providerId = externs.ProviderId.TWITTER;
    // (undocumented)
    static readonly TWITTER_SIGN_IN_METHOD = externs.SignInMethod.TWITTER;
}

// @public
export function unlink(userExtern: externs.User, providerId: externs.ProviderId): Promise<externs.User>;

// @public (undocumented)
export function updateCurrentUser(auth: externs.Auth, user: externs.User | null): Promise<void>;

// @public (undocumented)
export function updateEmail(externUser: externs.User, newEmail: string): Promise<void>;

// @public (undocumented)
export function updatePassword(externUser: externs.User, newPassword: string): Promise<void>;

// @public (undocumented)
export function updatePhoneNumber(user: externs.User, credential: externs.PhoneAuthCredential): Promise<void>;

// Warning: (ae-forgotten-export) The symbol "Profile" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function updateProfile(externUser: externs.User, { displayName, photoURL: photoUrl }: Profile): Promise<void>;

// @public (undocumented)
export function useDeviceLanguage(auth: externs.Auth): void;

// @public (undocumented)
export function verifyBeforeUpdateEmail(userExtern: externs.User, newEmail: string, actionCodeSettings?: externs.ActionCodeSettings | null): Promise<void>;

// @public (undocumented)
export function verifyPasswordResetCode(auth: externs.Auth, code: string): Promise<string>;


// (No @packageDocumentation comment for this package)

```