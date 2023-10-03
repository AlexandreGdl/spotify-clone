import styled from 'styled-components';

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: #1DB954 #1DB954 #1DB954 #1DB954;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #1DB954;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingApp = () => {
  return (
    <Container>
      <Loader />
    </Container>
  )
}