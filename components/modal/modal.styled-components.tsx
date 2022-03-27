import { colors, mediaQueries } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div<{ hide }>`
  position: fixed;
  z-index: 1000;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 10px 40px;
  top: 50px;
  left: 0;
  right: 0;
  margin: auto;
  width: 600px;
  height: 600px;
  overflow: auto;
  box-shadow: 0px 30px 50px 25px #0000001A;
  background-color: white;
  border-radius: 10px;

  @media(${mediaQueries.tablet}) {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > button {
    border: 0;
    background-color: white;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
      color: ${colors.darkBlue};
      transform: scale(1.125);
    }

    > svg {
      height: 30px;
      width:  30px;
    }
  }
`;