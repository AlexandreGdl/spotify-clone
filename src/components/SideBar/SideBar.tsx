import styled from 'styled-components';
import { Header } from './Header';
import { Side } from './Side';
import { useHorizontalDrag } from 'hooks';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: var(--sidebar-width, 331px);
`;

const Resizer = styled('div')`
  background: linear-gradient(hsla(0,0%,100%,.3),hsla(0,0%,100%,.3)) no-repeat 50%/1px 100%;
  height: 100%;
  inset-inline-end: -4.5px;
  right: -4.5px;
  width: 9px;
  cursor: col-resize;
  opacity: 0;
  position: absolute;
  &:hover {
    opacity: 1;
  }
`;

export const SideBar = () => {
  const {ref} = useHorizontalDrag('--sidebar-width', 200, 500);

  return (
    <Container id="side-container">
      <Header />
      <Side />
      <Resizer ref={ref}/>
    </Container>
  )
}