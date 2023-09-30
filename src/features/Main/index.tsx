import { AppContext } from "contexts";
import { Login } from "features/Login";
import { useArtist } from "hooks";
import { useContext, useEffect } from "react";

export const MainApp = () => {
  const appManager = useContext(AppContext);
  if (!appManager) throw Error('App not Initialized');
  const {error, artist, loading} = useArtist("4Z8W4fKeB5YxbusRsdQVPb");

  return (
    <div>
      <p>User Code : {appManager?.user_code}</p>
      <Login />
    </div>
  )
}