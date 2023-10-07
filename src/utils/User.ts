import axios from "axios";
import { base64url, generateCodeChallenge, randomBytes } from "utils";

export async function getUserToken(): Promise<undefined | any> {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (!code) return;
  const codeVerifier = localStorage.getItem('code_verifier');

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code ?? '',
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI ?? '',
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
    code_verifier: codeVerifier ?? 'undefined'
  });

  const response = await axios.post('https://accounts.spotify.com/api/token', 
    body, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }}
  );
  return response.data;
}


export function getUserAuthorization() {
  const scope = 'user-read-private user-read-email user-top-read playlist-read-private';
  const codeVerifier = base64url(randomBytes(96))
  const state = base64url(randomBytes(96))

  generateCodeChallenge(codeVerifier).then((codeChallenge: string) => {
    
    localStorage.setItem('code_verifier', codeVerifier);

    const args = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
      scope,
      redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI ?? '',
      state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });
  
    window.location.assign('https://accounts.spotify.com/authorize?' + args);
  })
}