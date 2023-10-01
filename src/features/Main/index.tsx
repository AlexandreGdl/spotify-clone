import { AppContext } from "contexts";
import { Login } from "features/Login";
import { useArtist, useTop5 } from "hooks";
import { useContext } from "react";

export const MainApp = () => {
  const appManager = useContext(AppContext);
  if (!appManager) throw Error('App not Initialized');
  const artistData = useArtist("4Z8W4fKeB5YxbusRsdQVPb");
  const top5Data = useTop5();

  return (
    <div>
      <p>User Code : {appManager?.user_code}</p>
      <Login />
    </div>
  )
}