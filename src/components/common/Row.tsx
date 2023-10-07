import styled from 'styled-components';

type Props = {
  justifyContent?: 'center' | 'align' | 'space-around' | 'space-between';
  gap?: string;
}

export const Row = styled('div').withConfig({
  shouldForwardProp: (prop) => !['justifyContent', 'gap'].includes(prop)
})<Props>`
  display: flex;
  align-items: center;
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent};`}
  gap: ${({gap}) => gap ? gap : '10px' };
`;