import { Type } from "class-transformer";
import { SpotifyFollowers } from "./SpotifyFollowers";
import { SpotifyImage, SpotifyImages } from "./SpotifyImage";

export class SpotifyUser {
  "display_name" : string;
  "external_urls" : {
    "spotify" : string;
  };
  "href" : string;
  "id" : string;
  @Type(() => SpotifyImage)
  "images" :SpotifyImages;
  "type" : string;
  "uri" : string;
  @Type(() => SpotifyFollowers)
  "followers" : SpotifyFollowers;
  "country" : string;
  "product" : string;
  "email" : string;
}