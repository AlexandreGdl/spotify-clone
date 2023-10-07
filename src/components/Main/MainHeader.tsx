import styled from 'styled-components';
import { PageController } from './PageController';
import { HeaderProfile } from './HeaderProfile';

const ContentHeaderContainer = styled('div')`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color: red;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 16px;
`;

export const MainHeader = () => {
  return (
    <ContentHeaderContainer>
      <PageController />
      <HeaderProfile />
    </ContentHeaderContainer>
  )
}