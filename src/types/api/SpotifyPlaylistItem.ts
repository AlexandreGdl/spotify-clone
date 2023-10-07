import { Expose, Type } from "class-transformer";
import { SpotifyImage, SpotifyImages } from "./SpotifyImage";

export class SpotifyPlaylistItem {
  @Expose()
  "collaborative": boolean;
  @Expose()
  "description": string;
  @Expose()
  "external_urls": {
    "spotify": string
  };
  @Expose()
  "href": string;
  @Expose()
  "id": string;
  @Expose()
  @Type(() => SpotifyImage)
  "images": SpotifyImages;
  @Expose()
  "name": string;
  @Expose()
  "owner": {
    "external_urls": {
      "spotify": string
    };
    "followers": {
      "href": string;
      "total": number
    };
    "href": string;
    "id": string;
    "type": string;
    "uri": string;
    "display_name": string
  };
  "public": false;
  "snapshot_id": string;
  "tracks": {
    "href": string;
    "total": number
  };
  "type": string;
  "uri": string
}

export type SpotifyPlaylistItems = SpotifyPlaylistItem[];