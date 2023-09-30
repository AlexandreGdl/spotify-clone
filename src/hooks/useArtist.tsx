import { AppContext } from "contexts";
import { useContext, useEffect, useState } from "react";
import { SpotifyArtistResponse } from "types/api";

export const useArtist = (id: string) => {
  const appManager = useContext(AppContext);

  const [data, setData] = useState<SpotifyArtistResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchArtist = async () => {
      if (!appManager) return;
      setLoading(true);
      setError(false);
      try {
        const response = await appManager.spotifyApi.getArtist(id);
        setData(response);
        setError(false);
      } catch (e) {
        setData(null);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArtist();
  }, [id, appManager]);

  return {artist: data, loading, error};
}