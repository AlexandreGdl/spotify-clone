import { SpotifyArtistResponse, SpotifyPlaylistsResponse, SpotifyTopTracksResponse, SpotifyUser } from "types/api";
import { ApiService } from "./ApiService";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class SpotifyApi extends ApiService {
  private base_url = 'https://api.spotify.com/v1/';

  async validateResponse(data: object): Promise<void> {
    const errors = await validate(data);
    if (errors.length > 0) throw Error('Validation error on following instance : ', data);
  }
  
  async getArtist(id: string, abortController: AbortController): Promise<SpotifyArtistResponse> {
    try {
      const response = await this.get<SpotifyArtistResponse>(`${this.base_url}artists/${id}`, abortController);
      const data = plainToInstance(SpotifyArtistResponse, response.data);
      await this.validateResponse(data);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getTopFive(abortController: AbortController): Promise<SpotifyTopTracksResponse> {
    try {
      const response = await this.get<SpotifyTopTracksResponse>(`${this.base_url}me/top/tracks?time_range=short_term&limit=5`, abortController);
      const data = plainToInstance(SpotifyTopTracksResponse, response.data);
      await this.validateResponse(data);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getCurrentUserPlaylists(abortController?: AbortController): Promise<SpotifyPlaylistsResponse> {
    try {
      const response = await this.get<SpotifyPlaylistsResponse>(`${this.base_url}me/playlists`, abortController);
      const data = plainToInstance(SpotifyPlaylistsResponse, response.data);
      await this.validateResponse(data);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getUser(abortController?: AbortController): Promise<SpotifyUser | undefined> {
    if (typeof this.accessToken === 'undefined') return undefined;
    try {
      const response = await this.get<SpotifyUser>(`${this.base_url}me`, abortController);
      const data = plainToInstance(SpotifyUser, response.data);
      await this.validateResponse(data);
      return data;
    } catch (e) {
      throw e;
    }
  }
}