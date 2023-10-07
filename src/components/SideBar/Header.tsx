import React from 'react';
import { IconHome, IconSearch } from '@tabler/icons-react';
import styled from 'styled-components';
import { ButtonLink } from './ButtonLink';

const HeaderContainer = styled('div')`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 12px;
`;
export const Header = React.memo(() => {
  return (
    <HeaderContainer>
      <ButtonLink href="test" Icon={IconHome} title='Accueil' />
      <ButtonLink href="test" Icon={IconSearch} title='Rechercher' />
    </HeaderContainer>
  )
});