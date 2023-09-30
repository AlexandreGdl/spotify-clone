import React from 'react';
import 'es6-shim';
import 'reflect-metadata';
import { useSpotifyCredentials } from 'hooks';
import { Initializer } from 'contexts';
import { MainApp } from 'features';

function App() {
  const {data, loading, error} = useSpotifyCredentials(
    process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
    process.env.REACT_APP_SPOTIFY_CLIENT_SECRET ?? ''
  );
  
  if (loading) {
    return (
      <p>Loading ...</p>
    )
  }

  if (error || !data) {
    return  (
      <p>Error</p>
    )
  }

  return <Initializer {...data}>
    <MainApp />
  </Initializer>
}

export default App;
