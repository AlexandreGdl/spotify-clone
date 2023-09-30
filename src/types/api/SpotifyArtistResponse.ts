import { IsString } from "class-validator";
import { SpotifyImage, SpotifyImages } from "./SpotifyImage";
import { Expose, Type } from "class-transformer";

export class SpotifyArtistResponse {
  @Expose()
  "external_urls": {
    spotify: string
  };
  
  @Expose()
  "followers": {
    href: null | string;
    total: number;
  };
  
  @Expose()
  "genres": string[];
  
  @Expose()
  "href": string;
  
  @Expose()
  @IsString()
  "id": string;
  
  @Expose()
  @Type(() => SpotifyImage)
  "images": SpotifyImages;
  
  @Expose()
  "name": string;
  
  @Expose()
  "popularity": number;
  
  @Expose()
  "type": string;
  
  @Expose()
  "uri": string
}