import styled from 'styled-components';

export const Container = styled.div<{hide}>`
  position: absolute;
  z-index: 1000;
  top: 50px;
  left: 0;
  right: 0;
  margin: auto;
  width: 593px;
  min-height: 300px;
  box-shadow: 0px 30px 50px 25px #0000001A;
  background-color: white;
`;
