import React from "react";
import { useRouter } from 'next/router';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { StyledRating, StyledTable, StyledTableHead, StyledTableRow, Styledtd, TableContainer } from "./problemsList.styled-components";

const ProblemsList = ({ problems }) => {
    const { push } = useRouter();

    const handleProblemSelection = (problemId) => {
        push(`/problems/${problemId}`);
    }

    return (
        <TableContainer>
            <h2>Practice with some problems</h2>
            <StyledTable>
                <StyledTableHead>
                    <tr>
                        <th>Name</th>
                        <th>Difficulty</th>
                        <th>Veredict</th>
                    </tr>
                </StyledTableHead>
                <tbody>
                    {problems.map(element => {
                        return element.visible ? (
                            <StyledTableRow key={element.id} onClick={() => handleProblemSelection(element.id)}>
                                <Styledtd>{element.name}</Styledtd>
                                <Styledtd>
                                    <StyledRating
                                        name="read-only"
                                        value={element.difficulty}
                                        precision={0.5}
                                        icon={<CircleIcon />}
                                        emptyIcon={<CircleOutlinedIcon />}
                                        readOnly
                                    />
                                </Styledtd>
                                <Styledtd>{element.veredict}</Styledtd>
                            </StyledTableRow>) : null
                    })}
                </tbody>
            </StyledTable>
        </TableContainer>
    )
};

export default ProblemsList;