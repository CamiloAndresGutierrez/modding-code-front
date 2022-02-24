import { colors, mediaQueries } from 'lib/constants';
import styled from 'styled-components';
import QuizIcon from '@mui/icons-material/Quiz';

const leftSideWidth = "75%";
const rightSideWidth = "25%";

export const Container = styled.div`
  position: relative;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`;

export const VideoContainer = styled.div`
  width: ${leftSideWidth};


  @media (${mediaQueries.desktop}) {
    width: 100%;
  }

  > video {
    width: 100%;
  }
`;

export const SectionsContainer = styled.div`
  width: ${rightSideWidth};
  height: 70vh;
  overflow: auto;

  @media (${mediaQueries.desktop}) {
    width: 100%;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  > div {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 20px;

    @media (${mediaQueries.desktop}) {
      font-size: 1.125rem;
    }
  };

  > div > span {
    color: grey;
  };
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

export const ProblemsButton = styled.button`
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px;
    background-color: ${colors.darkBlue};
    border: none;
    border-radius: 50px;
    width: 150px;
    height: 40px;
    color: white;
    transition: all ease-in-out 300ms;

    @media (${mediaQueries.tablet}) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.25);
    }
`;

export const StyledQuizIcon = styled(QuizIcon)``;

export const ButtonText = styled.div`
  @media (${mediaQueries.tablet}) {
    display: none;
  }
`;

export const PlayerContainer= styled.div<{ layout: number }>`
  display: flex;
  flex-direction: row;

  @media (${mediaQueries.desktop}) {
    flex-direction: column;
  }
`;

export const ToolsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 20px auto 20px auto;
  gap: 10px;
`;

export const Tools = styled.div`
  width: 100%;
  min-height: 70px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  text-align: center;
  transition: all ease-in-out 300ms;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;

  .text {
    width: 80%;
    padding: 5px;
  }

  .icon {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;    
  }
  
  .material {
    background-color: #E0CCFF;
  }
  .tools {
    background-color: #EBFFCC;
  }
  .expert {
    background-color: ${colors.lightBlue};
  }

  &:hover {
    box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.25);
  }
`;
