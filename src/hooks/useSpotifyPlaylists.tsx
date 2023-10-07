import { AppContext } from "contexts";
import { useCallback, useContext, useEffect, useState } from "react";
import { SpotifyPlaylistsResponse } from "types/api";

export const useSpotifyPLaylists = () => {
  const appManager = useContext(AppContext);
  if (!appManager) throw Error('AppManager should be initialized');
  const [data, setData] = useState<SpotifyPlaylistsResponse | undefined>(undefined);
  const [status, setStatus] = useState<'idle' | 'loading' |'error' | 'success'>('idle');

  const fetchPlaylists = useCallback(async (abortController: AbortController) => {
    setStatus('loading');
    try {
      const response = await appManager.spotifyApi.getCurrentUserPlaylists(abortController);
      setData(response);
      setStatus('success')
    } catch (e) {
      const signal = abortController.signal;
      if (signal.aborted) return;
      setData(undefined);
      setStatus('error');
    }
  }, [appManager])

  useEffect(() => {
    const abortCOntroller = new AbortController();

    fetchPlaylists(abortCOntroller);

    return () => {
      abortCOntroller.abort();
    }
  }, [fetchPlaylists]);

  return {data, status, refetch: fetchPlaylists};
}