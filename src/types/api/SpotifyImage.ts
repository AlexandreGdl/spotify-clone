import { Expose } from "class-transformer";

export class SpotifyImage {
  @Expose()
  "height": number;
  @Expose({name: 'url'})
  "src": string;
  @Expose()
  "width": number;
}

export type SpotifyImages = SpotifyImage[];