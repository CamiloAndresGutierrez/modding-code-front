import { colors, mediaQueries } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 35px;
  
  @media( ${mediaQueries.tablet} ) {
    margin-top: 50px;
  }

  @media( ${mediaQueries.mobile} ) {
    justify-content: center;
  }
`;

export const NewMinicourse = styled.div`
  background: ${colors.darkBlue};
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  height: 50px;
  width: 187px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  &:hover {
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.15);
  }
`;

export const ExpertMinicoursesContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto 50px auto;
  padding: 0 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (${mediaQueries.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${mediaQueries.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }

`;

export const ExpertMinicourse = styled.div<{randomColorOne, randomColorTwo}>`
  height: 200px;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(0deg, ${props => props.randomColorOne}, ${props => props.randomColorTwo});
  padding: 25px;
  color: black;
  font-weight: bold;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all ease-in-out 300ms;

  &:hover {
    transform: scale(1.05);
  }

`;

export const MinicourseName = styled.h3`
  width: 90%;
`;

export const ButtonGroup = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;

  .edit {
    color: ${colors.darkerBlue};
  }

  .delete {
    color: red;
  }

  > div {
    background-color: transparent;
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
