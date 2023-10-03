import { SideBar } from "components";
import { Login } from "features/Login";
import { useSpotifyUser } from "hooks";
import { observer } from "mobx-react-lite";
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  align-items: stretch;
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  padding: 8px;
`;

const Content = () => {
  return (
    <div></div>
  )
}

export const MainApp = observer(() => {
  const userQuery = useSpotifyUser();

  if (userQuery.status === 'loading' || userQuery.status === 'idle') {
    return <div>loading...</div>
  }

  if (userQuery.status === 'error' || !userQuery.data) {
    return <Login />
  }

  return (
    <Container>
      <SideBar/>
      <Content/>
    </Container>
  );
});

