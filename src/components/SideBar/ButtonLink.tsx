import styled from "styled-components"
import React from 'react';
import tabler from '@tabler/icons-react';

const Container = styled('a')`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({theme}) => theme.text.secondary};
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 1rem;
  text-decoration: none;
  padding: 4px 12px;

  &:hover {
    color: ${({theme}) => theme.text.main};
  }

  transition: all .2s;
`;

type ButtonLinkProps = {
  title: string;
  Icon: tabler.Icon 
} & React.ComponentPropsWithoutRef<'a'>

export const ButtonLink = ({Icon, title, ...props}: ButtonLinkProps) => {
  return (
    <Container {...props}>
      <Icon size={30} />
      {title}
    </Container>
  )
}