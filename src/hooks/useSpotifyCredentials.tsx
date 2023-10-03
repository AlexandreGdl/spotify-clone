import { useState, useEffect } from 'react';
import {plainToInstance} from 'class-transformer';
import { SpotifyCredentialsResponse } from '../types/api';

export const useSpotifyCredentials = (clientId: string, clientSecret: string) => {
  const [data, setData] = useState<SpotifyCredentialsResponse | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' |'error' | 'success'>('idle');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchToken = async () => {
      setStatus('loading');
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          signal: abortController.signal,
          body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(plainToInstance(SpotifyCredentialsResponse, jsonData));
        setStatus('success');
      } catch (error) {
        const signal = abortController.signal;
        if (signal.aborted) return;
        setStatus('error');
      }
    };

    fetchToken();
    return () => {
      abortController.abort();
    }
  }, [clientId, clientSecret]);

  return { data, status };
};

export default useSpotifyCredentials;
