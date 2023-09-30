import { Expose } from "class-transformer";

export class SpotifyCredentialsResponse {
  @Expose({name: 'access_token'})
  "accessToken": string;
  
  @Expose({name: 'token_type'})
  "tokenType": string;
  
  @Expose({name: 'expires_in'})
  "expiresIn": number;
};