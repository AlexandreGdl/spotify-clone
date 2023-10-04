import NeonCursor from "components/NeonCursor";
import styled from "styled-components";
import { getUserAuthorization } from "utils/User";

const Container = styled('div')`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  overflow: hidden;
  cursor: none;
`;
const Title = styled('h1')`
  color: #FFF;
  font-size: 5em;
  text-align: center;
  text-transform: uppercase;
  z-index: 13;
`;
const Button = styled('button')`
  text-transform: uppercase;
  box-shadow: 0 0 50px 8px ${({theme}) => theme.colors.main};
  padding: 20px 50px;
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid ${({theme}) => theme.colors.main};
  color: #FFF;
  font-weight: 400;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  cursor: none;

  &:hover {
    background-color: ${({theme}) => theme.colors.main};
    color: #000;
    box-shadow: 0 0 50px 2px ${({theme}) => theme.colors.main};
  }

  transition: all .2s;
`;

export const Login = () => {
  return (
    <Container>
      <Title>Spotify-Clone</Title>
      <Button onClick={getUserAuthorization}>Connexion</Button>
      <NeonCursor />
    </Container>  
  )
}