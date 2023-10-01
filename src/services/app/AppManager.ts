import { makeAutoObservable, observable, action } from "mobx";
import { SpotifyApi } from "../api";

export class AppManager {
  @observable
  spotifyApi: SpotifyApi = new SpotifyApi();

  constructor() {
    makeAutoObservable(this);
    this.retrieveCode();
  }

  @action
  private async retrieveCode(): Promise<void> {
    console.log('hiii');
    if (typeof this.spotifyApi.accessToken !== 'undefined') return;
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

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      });
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      this.spotifyApi.updateAccessToken(data.access_token);
      console.log(data.access_token);
      window.history.pushState({}, '', window.location.pathname);
    }
    catch (e) {
      console.error('Error:', e);
    }
  }
}