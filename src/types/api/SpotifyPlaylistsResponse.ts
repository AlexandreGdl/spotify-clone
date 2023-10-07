import { Type } from "class-transformer";
import { SpotifyPlaylistItem, SpotifyPlaylistItems } from "./SpotifyPlaylistItem";

export class SpotifyPlaylistsResponse {
  "href": string;
  "limit": number;
  "next": string;
  "offset": number;
  "previous": string;
  "total": number;
  @Type(() => SpotifyPlaylistItem)
  "items": SpotifyPlaylistItems
}