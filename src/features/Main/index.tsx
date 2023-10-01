import { AppContext } from "contexts";
import { Login } from "features/Login";
import { useTop5 } from "hooks";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

const Profile = observer(() => {
  const {loading, error, data} = useTop5();

  if (loading) {
    return <div>loading ...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  return (
    <ul>
      {data.items.map((item) => (
        <p>{item.name}</p>
      ))}
    </ul>
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

