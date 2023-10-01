import { SpotifyApi } from "../api";

export class AppManager {
  private spotify_api: SpotifyApi;
  user_code: string | undefined; 

  constructor(accessToken: string) {
    this.spotify_api = new SpotifyApi(accessToken);
    
    this.retrieveCode();
  }

  get spotifyApi(): SpotifyApi {
    return this.spotify_api;
  }

  private async retrieveCode(): Promise<void> {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code ?? '',
      redirect_uri: 'http://localhost:3000',
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
      code_verifier: codeVerifier ?? 'undefined'
    });

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('access_token', data.access_token);
      console.log(data.access_token);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    if (code) {
      this.user_code = code;
      this.spotifyApi.setUserCode(code);
    }
  }
}