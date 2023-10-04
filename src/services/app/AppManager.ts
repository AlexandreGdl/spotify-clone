import { makeAutoObservable, observable, action } from "mobx";
import { SpotifyApi } from "../api";
import { SpotifyUser } from "types/api";
import { getUserToken } from "utils/User";

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
    const data = await getUserToken();
    if (typeof data === 'undefined') return;

    localStorage.setItem('access_token', data.access_token);
    this.spotifyApi.updateAccessToken(data.access_token);
    window.history.pushState({}, '', window.location.pathname);

    this.fetchUser();
  }

  @action
  async fetchUser(abortController?: AbortController): Promise<SpotifyUser | undefined> {
    const user = await this.spotifyApi.getUser(abortController);
    this.spotifyUser = user;
    return user;
  }
}