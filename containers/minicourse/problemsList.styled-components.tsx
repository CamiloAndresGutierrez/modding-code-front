import { colors } from 'lib/constants';
import styled from 'styled-components';

export const TableContainer = styled.div`
    padding: 20px;
`;

export const StyledTable = styled.table`
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    border-collapse: collapse;

`;

export const StyledTableHead = styled.thead`
    height: 50px;
    border-bottom: 1px solid #dddddd;

`;

export const Styledtd = styled.td`
    text-align: center;
`;

export const StyledTableRow = styled.tr`
    height: 50px;
    cursor: pointer;
    border-bottom: 1px solid #dddddd;
    transition: all ease-in-out 300ms;


    &:hover {
        background-color: ${colors.lighterBlue}
    }
`;