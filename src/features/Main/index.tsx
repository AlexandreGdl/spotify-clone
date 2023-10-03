import { Login } from "features/Login";
import { useSpotifyUser } from "hooks";
import { observer } from "mobx-react-lite";

export const MainApp = observer(() => {
  const userQuery = useSpotifyUser();

  if (userQuery.status === 'loading' || userQuery.status === 'idle') {
    return <div>loading...</div>
  }

  if (userQuery.status === 'error' || !userQuery.data) {
    return <Login />
  }

  return (
    <div>
      <p>User : {userQuery.data.display_name}</p>
    </div>
  );
});

