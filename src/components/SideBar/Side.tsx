import React from 'react';
import styled from 'styled-components';

const SideContainer = styled('div')`
  width: 100%;
  background-color: #121212;
  border-radius: 8px;
  flex-grow: 1;
`;

export const Side = React.memo(() => {
  return (
    <SideContainer></SideContainer>
  )
})