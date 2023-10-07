import { IconBell, IconDownload } from '@tabler/icons-react';
import { Row } from 'components/common';
import { UserIcon } from 'features/User';
import styled from 'styled-components';

type StyleProps = {light?: boolean, padding?: string};

const HeaderButtonText = styled('p').withConfig({
  shouldForwardProp: (prop) => !['light'].includes(prop)
})<StyleProps>`
  font-weight: 700;
  ${({light}) => light && 'color: #000;'}
  font-size: 1.1em;
`;

const HeaderButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['light', 'padding'].includes(prop),
})<StyleProps>`
  border: none;
  background-color: ${({light}) => light ? '#FFF' : 'rgba(0,0,0,0.5)'};
  border-radius: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #FFF;
  height: 32px;
  padding: ${({padding}) => padding ? padding : '15px'};
  cursor: pointer;
  min-width: 32px;

  &:hover {
    transform: scale(1.05);
  }

  transition: all .2s;
`;
export const HeaderProfile = () => {
  return (
    <Row>
      <HeaderButton light>
        <HeaderButtonText light>Découvrir Premium</HeaderButtonText>
      </HeaderButton>
      <HeaderButton>
        <IconDownload size={20} />
        <HeaderButtonText>Installer l'appli</HeaderButtonText>
      </HeaderButton>
      <HeaderButton padding="0">
        <IconBell size={20} />
      </HeaderButton>
      <HeaderButton padding="0">
        <UserIcon />
      </HeaderButton>
    </Row>
  )
}