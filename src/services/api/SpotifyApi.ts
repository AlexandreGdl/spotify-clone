import { SpotifyArtistResponse } from "types/api";
import { ApiService } from "./ApiService";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class SpotifyApi {
  private base_url = 'https://api.spotify.com/v1/';
  private apiService: ApiService;

  constructor(accessToken: string) {
    this.apiService = new ApiService(accessToken);
  }

  public setUserCode(code: string) {
    this.apiService.userCode = code;
  }

  async validateResponse(data: object): Promise<void> {
    const errors = await validate(data);
    if (errors.length > 0) throw Error('Validation error on following instance : ', data);
  }
  
  async getArtist(id: string): Promise<SpotifyArtistResponse> {
    try {
      const response = await this.apiService.get<SpotifyArtistResponse>(`${this.base_url}artists/${id}`);
      const data = plainToInstance(SpotifyArtistResponse, response.data);
      await this.validateResponse(data);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getTopFive(): Promise<any> {
    try {
      const response = await this.apiService.get(`${this.base_url}me/top/tracks?time_range=short_term&limit=5`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}