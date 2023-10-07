import React from 'react';
import styled from 'styled-components';
import { SideHeader } from './SideHeader';
import { PlaylistsList } from 'features';

const Container = styled('div')`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  flex-grow: 1;
  padding: 8px 12px;
  color: ${({theme}) => theme.text.secondary};
  overflow-y: auto;
`;

export const Side = React.memo(() => {
  return (
    <Container>
      <SideHeader />
      <PlaylistsList />
    </Container>
  )
})