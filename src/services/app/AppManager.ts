import { makeAutoObservable, observable, action } from "mobx";
import { SpotifyApi } from "../api";
import { SpotifyUser } from "types/api";

export class AppManager {
  @observable
  spotifyUser: SpotifyUser | undefined = undefined;
  @observable
  spotifyApi: SpotifyApi = new SpotifyApi();

  constructor() {
    makeAutoObservable(this);
    this.retrieveCode();
  }

  @action
  private async retrieveCode(): Promise<void> {
    if (typeof this.spotifyApi.accessToken !== 'undefined') return;
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!code) return;
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
      window.history.pushState({}, '', window.location.pathname);
      // Once access token set, fetch the user

      this.fetchUser();
    }
    catch (e) {
      console.error('Error:', e);
    }
  }

  @action
  async fetchUser(abortController?: AbortController): Promise<SpotifyUser | undefined> {
    const user = await this.spotifyApi.getUser(abortController);
    this.spotifyUser = user;
    return user;
  }
}