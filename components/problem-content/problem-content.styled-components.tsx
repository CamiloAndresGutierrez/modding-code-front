import styled from 'styled-components';

import SaveIcon from '@mui/icons-material/Save';

import { colors, mediaQueries } from 'lib/constants';

export const Container = styled.div`
  position: relative;
  min-height: 100px;
  width: 100%;
  border-radius: 0px;
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 35px;

  @media (max-width: 520px) {
    padding: 30px;
    height: 250px;
    flex-direction: column;
  }

  > button {
    color: black;
    border: none;
    background-color: transparent;
    transition: all ease-in-out 200ms;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
  }

  .description {
    color: white;
    height: 25px;
    width: 100px;
    background-color: ${colors.darkBlue};
    border-radius: 10px;
  }

  .editor {
    height: 200px;
  }

  .sample {
    height: 80px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  > button {
    border: 0;
    background-color: transparent;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .delete {
    color: red;
  }
`;

export const DetailsButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  > button {
    border: 0;
    background-color: ${colors.darkBlue};
    color: white;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    transition: all ease-in-out 200ms;

    :hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  @media (${mediaQueries.tablet}) {
    flex-direction: column;
  }

  @media (max-width: 520px) {
    flex-direction: row;
  }
`;

export const ProblemInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const DescriptionContainer = styled.div`
  > textarea {
    width: 100%;
    height: 350px;
    margin: 30px 0 30px 0;
    padding: 15px 15px;
    border: 1px solid lightgrey;
    transition: all ease-in-out 200ms;
    border-radius: 10px;

    &:focus {
      border: 1px solid ${colors.darkerBlue};
    }
  }

  > textarea:focus {
    outline: none;
  }
`;

export const ButtonGroupModal = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  > button {
    flex: 1;
    border: 0;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    background-color: white;
    color: black;
    border: 2px ${colors.darkerBlue} solid;
    transition: all ease-in-out 300ms;
    cursor: pointer;
    margin-bottom: 30px;
    :hover {
      background-color: ${colors.darkerBlue};
      color: white;
    }
  }
`;

export const TestCasesContainer = styled.div`
  > div {
    overflow-x: auto;
  }

  > div > table {
    margin-top: 40px;
    width: 100%;
    border-collapse: collapse;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  > button {
    width: 50%;
    border: 0;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    background-color: ${colors.darkerBlue};
    color: white;
  }

`;

export const TableRow = styled.tr`
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #dddddd;
  transition: all ease-in-out 300ms;

  > td {
    text-align: center;
  }


  &:hover {
      background-color: ${colors.lighterBlue}
  }
`;

export const StyledTableHead = styled.thead`
    height: 50px;
    border-bottom: 1px solid #dddddd;
`;

export const ButtonWithIcons = styled.div`
  border: none;
  background-color: transparent;
`;

export const StyledSaveIcon = styled(SaveIcon)`
  color: ${colors.darkBlue};
  :hover {
      cursor: pointer;
      transform: scale(1.1);
  }
`;

export const StyledSaveDescription = styled.button`
  border: none;
  background-color: transparent;
  transition: all ease-in-out 200ms;
  color: white;
  height: 50px;
  width: 100px;
  background-color: ${colors.darkerBlue};
  border-radius: 10px;
  margin-bottom: 20px;

  :hover {
      cursor: pointer;
      transform: scale(1.1);
  }

`