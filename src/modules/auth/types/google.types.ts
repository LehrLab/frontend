import { CredentialResponse } from "@react-oauth/google";

export type GoogleTokenType = CredentialResponse["credential"];

export type AuthGoogleResponse = {
  accessToken: string;
  refreshToken: string;
}