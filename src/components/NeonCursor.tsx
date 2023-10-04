import React, { useState, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';

const Container = styled('div')`
  position: fixed;
  z-index: 12;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.main};
  box-shadow: 0 0 50px 2px ${({theme}) => theme.colors.main};
`;

function NeonCursor() {
  const theme = useTheme();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    // Add mousemove event listener to track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    left: `${mouseX}px`,
    top: `${mouseY}px`,
    backgroundColor:  theme.colors.main,
    boxShadow: `0 0 50px 2px ${theme.colors.main}`
  };

  return (
    <Container
      style={cursorStyle}
    ></Container>
  );
}

export default NeonCursor;