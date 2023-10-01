import { SpotifyImages } from "./SpotifyImage";

export class SpotifyTopTrack {
    "external_urls": {
      "spotify": string
    };
    "followers": {
      "href": string,
      "total": number
    };
    "genres": string[];
    "href": string;
    "id": string;
    "images": SpotifyImages;
    "name": string;
    "popularity": number;
    "type": string;
    "uri": string;
}

export type SpotifyTopTracks = SpotifyTopTrack[];