import { useState, useEffect } from 'react';
import {plainToInstance} from 'class-transformer';
import { SpotifyCredentialsResponse } from '../types/api';

export const useSpotifyCredentials = (clientId: string, clientSecret: string) => {
  const [data, setData] = useState<SpotifyCredentialsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(plainToInstance(SpotifyCredentialsResponse, jsonData));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchToken();
  }, [clientId, clientSecret]);

  return { data, loading, error };
};

export default useSpotifyCredentials;
