import { LoadingApp, SideBar } from "components";
import { Login } from "features/Login";
import { useSpotifyUser } from "hooks";
import { observer } from "mobx-react-lite";
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  align-items: stretch;
  background-color: #000000;
  height: calc(100vh - 16px);
  width: auto;
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
    return <LoadingApp />
  }

  if (userQuery.status === 'error' || !userQuery.data) {
    return <Login />;
  }

  return (
    <Container>
      <SideBar/>
      <Content/>
    </Container>
  );
});

