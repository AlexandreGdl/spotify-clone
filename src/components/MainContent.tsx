import styled from "styled-components"
import { MainHeader } from "./Main/MainHeader";

const Container = styled('div')`
  flex-grow: 1;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
`;

export const MainContent = () => {
  return (
    <Container>
      <MainHeader />
    </Container>
  )
}