import { AppContext } from "contexts";
import { useContext, useEffect, useState } from "react";

export const useTop5 = () => {
  const appManager = useContext(AppContext);

  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchArtist = async () => {
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
    }
    fetchArtist();
  }, [appManager]);

  return {artist: data, loading, error};
}