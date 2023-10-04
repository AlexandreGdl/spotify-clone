import styled, { keyframes } from "styled-components";

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid ${(props) => props.theme.colors.main};
  border-right: 2px solid ${(props) => props.theme.colors.main};
  border-bottom: 2px solid ${(props) => props.theme.colors.main};
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const LoadingApp = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}