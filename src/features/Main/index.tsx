import { AppContext } from "contexts";
import { Login } from "features/Login";
import { useTop5 } from "hooks";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

const Profile = observer(() => {
  useTop5();
  return (
    <div>toto</div>
  )
});

export const MainApp = observer(() => {
  const appManager = useContext(AppContext);
  if (!appManager) throw Error('App not Initialized');

  return (
    <div>
      <p>Value : {appManager.spotifyApi.accessToken}</p>
      <Login />
      {appManager.spotifyApi.accessToken && <Profile />}
    </div>
  )
})

