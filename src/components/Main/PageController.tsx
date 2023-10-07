import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Row } from 'components/common';
import styled from 'styled-components';

const RoundPagination = styled('div')`
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  border-radius: 50px;
  width: 32px;
  height: 32px;
  cursor: not-allowed;
`;

export const PageController = () => {
  return (
    <Row>
      <RoundPagination>
        <IconChevronLeft color="#FFF" />
      </RoundPagination>
      <RoundPagination>
        <IconChevronRight color="#FFF" />
      </RoundPagination>
    </Row>
  )
}