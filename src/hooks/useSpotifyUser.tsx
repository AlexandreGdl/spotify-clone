import { AppContext } from "contexts";
import { useCallback, useContext, useEffect, useState } from "react";
import { SpotifyUser } from "types/api";

export const useSpotifyUser = () => {
  const appManager = useContext(AppContext);
  if (!appManager) throw Error('AppManager should be initialized');
  const [data, setData] = useState<SpotifyUser | undefined>(undefined);
  const [status, setStatus] = useState<'idle' | 'loading' |'error' | 'success'>('idle');

  const fetchUser = useCallback(async (abortController: AbortController) => {
    setStatus('loading');
    try {
      let response: SpotifyUser | undefined = appManager.spotifyUser;
      if (typeof appManager.spotifyUser === 'undefined') {
        response = await appManager.fetchUser(abortController);
      }
      setData(response);
      setStatus('success')
    } catch (e) {
      const signal = abortController.signal;
      console.log('aborted')
      if (signal.aborted) return;
      setData(undefined);
      setStatus('error');
    }
  }, [appManager])

  useEffect(() => {
    const abortCOntroller = new AbortController();

    fetchUser(abortCOntroller);

    return () => {
      abortCOntroller.abort();
    }
  }, [fetchUser]);

  return {data, status, refetch: fetchUser};
}