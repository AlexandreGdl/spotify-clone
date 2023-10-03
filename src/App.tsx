import React from 'react';
import 'es6-shim';
import 'reflect-metadata';
import { useSpotifyCredentials } from 'hooks';
import { Initializer } from 'contexts';
import { MainApp } from 'features';
import { LoadingApp } from 'components';

function App() {
  const {data, status} = useSpotifyCredentials(
    process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '',
    process.env.REACT_APP_SPOTIFY_CLIENT_SECRET ?? ''
  );
  
  if (status === 'loading' || status === 'idle') {
    return (
      <LoadingApp/>
    )
  }

  if (status === 'error' || !data) {
    return  (
      <p>Error</p>
    )
  }

  return <Initializer {...data}>
    <MainApp />
  </Initializer>
}

export default App;
