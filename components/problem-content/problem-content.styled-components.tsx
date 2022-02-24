import { colors, mediaQueries } from 'lib/constants';
import styled from 'styled-components';

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
`;

export const ButtonGroup = styled.div`
  display: flex;

  > button {
    border: 0;
    background-color: transparent;
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
  }

  @media (${mediaQueries.tablet}) {
    flex-direction: column;
  }

`;

export const ProblemInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const DescriptionContainer = styled.div`
  > textarea {
    width: 100%;
    height: 400px;
    margin: 30px 0 30px 0;
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
    width: 50%;
    border: 0;
    height: 40px;
    width: 100px;
    border-radius: 10px;
  }

  .cancel {
    background-color: white;
    color: black;
    border: 2px ${colors.darkerBlue} solid;
  }

  .save {
    background-color: ${colors.darkerBlue};
    color: white;
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