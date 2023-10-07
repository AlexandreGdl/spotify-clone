import { IconArrowRight, IconBooks, IconPlus } from '@tabler/icons-react';
import styled from 'styled-components';
import { Row } from 'components/common';

const Text = styled('p')`
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 1rem;
`;

export const SideHeader = () => {
  return (
    <Row justifyContent='space-between'>
      <Row gap="15px">
        <IconBooks />
        <Text>Bibliothèque</Text>
      </Row>
      <Row gap="15px">
        <IconPlus/>
        <IconArrowRight/>
      </Row>
    </Row>
  )
}