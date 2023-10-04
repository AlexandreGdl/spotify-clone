import React from 'react';
import { IconHome, IconSearch } from '@tabler/icons-react';
import styled from 'styled-components';
import { ButtonLink } from './ButtonLink';

const HeaderContainer = styled('div')`
  width: 100%;
  background-color: #121212;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;
export const Header = React.memo(() => {
  return (
    <HeaderContainer>
      <ButtonLink href="test" Icon={IconHome} title='Accueil' />
      <ButtonLink href="test" Icon={IconSearch} title='Rechercher' />
    </HeaderContainer>
  )
});