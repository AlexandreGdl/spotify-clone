import { useCallback } from "react"
import { base64url, generateCodeChallenge, randomBytes } from "utils";

export const Login = () => {
  const fetchUserToken = useCallback(() => {
    const redirectUri = 'http://localhost:3000';
    const codeVerifier = base64url(randomBytes(96))
    const state = base64url(randomBytes(96))
    generateCodeChallenge(codeVerifier).then((codeChallenge: string) => {
      const scope = 'user-read-private user-read-email user-top-read';
      
      localStorage.setItem('code_verifier', codeVerifier);

      const args = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
        scope,
        redirect_uri: redirectUri,
        state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
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