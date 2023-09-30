import { Expose } from "class-transformer";

export class SpotifyImage {
  @Expose()
  "height": number;
  @Expose()
  "url": string;
  @Expose()
  "width": number;
}

export type SpotifyImages = SpotifyImage[];