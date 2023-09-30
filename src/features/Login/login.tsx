import { useCallback } from "react"
import { generateCodeChallenge, generateRandomString } from "utils";

export const Login = () => {
  const fetchUserToken = useCallback(() => {
    const redirectUri = 'http://localhost:3000';
    const codeVerifier = generateRandomString(123);
    generateCodeChallenge(codeVerifier).then((codeChallenge: string) => {
      const state = generateRandomString(16);
      const scope = 'user-read-private user-read-email';
      
      localStorage.setItem('code_verifier', codeVerifier);

      const args = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
      });
    
      window.location.assign('https://accounts.spotify.com/authorize?' + args);
    })
  }, []);
  

  return (
    <div>
      <button onClick={fetchUserToken}>login</button>
    </div>  
  )
}