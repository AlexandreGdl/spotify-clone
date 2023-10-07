import { LoadingApp, MainContent, SideBar } from "components";
import { Login } from "features";
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
  gap: 8px;
`;

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
      <MainContent />
    </Container>
  );
});

