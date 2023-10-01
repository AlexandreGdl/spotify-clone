import { AppContext } from "contexts";
import { useCallback, useContext, useEffect, useState } from "react";

export const useTop5 = () => {
  const appManager = useContext(AppContext);
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const fetchArtist = useCallback(async () => {
  if (!appManager) return;
    setLoading(true);
    setError(false);
    try {
      const response = await appManager.spotifyApi.getTopFive();
      setData(response);
      setError(false);
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [appManager])

  useEffect(() => {
    fetchArtist();
  }, [fetchArtist]);

  return {artist: data, loading, error, refetch: fetchArtist};
}