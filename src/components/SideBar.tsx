import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 331px;
`;

const HeaderContainer = styled('div')`
  width: 100%;
  height: 100px;
  background-color: #121212;
  border-radius: 8px;
`;
const SideContainer = styled('div')`
  width: 100%;
  height: 300px;
  background-color: #121212;
  border-radius: 8px;
`;

const Header = () => {
  return (
    <HeaderContainer></HeaderContainer>
  )
}
const Side = () => {
  return (
    <SideContainer></SideContainer>
  )
}

export const SideBar = () => {
  return (
    <Container>
      <Header />
      <Side />
    </Container>
  )
}