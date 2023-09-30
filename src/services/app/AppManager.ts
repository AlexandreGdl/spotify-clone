import { SpotifyApi } from "../api";

export class AppManager {
  private spotify_api: SpotifyApi;
  user_code: string | undefined; 

  constructor(accessToken: string) {
    this.spotify_api = new SpotifyApi(accessToken);
    
    this.retrieveCode();
  }

  private retrieveCode(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    this.user_code = code ?? undefined;
  }

  get spotifyApi(): SpotifyApi {
    return this.spotify_api;
  }
}