import { Expose, Type } from "class-transformer";
import { SpotifyTopTrack, SpotifyTopTracks } from "./SpotifyTopTrack";

export class SpotifyTopTracksResponse {
  @Expose()
  "href": string;
  @Expose()
  @Type(() => SpotifyTopTrack)
  "items": SpotifyTopTracks
  @Expose()
  "limit": number
  @Expose()
  "next": string | undefined;
  @Expose()
  "offset": number;
  @Expose()
  "previous": string | undefined;
  @Expose()
  "total": number;
}