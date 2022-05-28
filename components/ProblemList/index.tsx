import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { StyledRating, StyledTable, StyledTableHead, StyledTableRow, Styledtd, TableContainer } from "./problemsList.styled-components";
import Dialog from "components/Dialog";
import { Tooltip } from "@mui/material";
import { useFetch } from "utils/hooks/useFetch";
import { GET_PROBLEMS_EVALUATIONS } from "lib/client/evaluation";
import { responseHasErrors } from "lib/utils";
import makeRequest from "lib/client";
import { url } from "lib/constants";
import { genericError } from "lib/constants/errorMessages";

const ProblemsList = ({ problems }) => {
    const { accessToken } = useFetch({});
    const { push } = useRouter();
    const [filteredProblems, setFilteredProblems] = useState([]);

    const handleProblemSelection = (problemId) => {
        push(`/problems/${problemId}`);
    }

    const filteredProblemsWithEvaluation = () => {
        const fileteredProblems = problems.filter(problem => problem.visible);
        let problemsWithVeredict = []

        fileteredProblems.forEach(async filteredProblem => {
            const { requestUrl, body, method } = GET_PROBLEMS_EVALUATIONS(filteredProblem.id);
            try {
                const response = await makeRequest(url(requestUrl), body, method, accessToken);
                if (responseHasErrors(response, genericError)) return;
                const { evaluations } = response;

                problemsWithVeredict.push({
                    ...filteredProblem,
                    evaluations
                });
            } catch (e) {
                alert(genericError);
            };
            setFilteredProblems(problemsWithVeredict);
        });
    }

    useEffect(() => {
        if (accessToken) {
            filteredProblemsWithEvaluation();
        }
    }, [accessToken]);

    return (
        <TableContainer>
            {filteredProblems.length ?
                <>
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
                            {filteredProblems.map(element => {
                                return element.visible ? (
                                    <StyledTableRow key={element.id}>
                                        <Styledtd
                                            onClick={() => handleProblemSelection(element.id)}
                                        >
                                            <div className={"problem-name"}>
                                                {element.name}
                                            </div>
                                        </Styledtd>
                                        <Styledtd>
                                            <Tooltip title="Difficulty">
                                                <StyledRating
                                                    name="read-only"
                                                    value={element.difficulty}
                                                    precision={0.5}
                                                    icon={<CircleIcon />}
                                                    emptyIcon={<CircleOutlinedIcon />}
                                                    readOnly
                                                />
                                            </Tooltip>
                                        </Styledtd>
                                        <Styledtd>
                                            <select defaultValue={'Attempts'}>
                                                <option disabled>Attempts</option>
                                                {element.evaluations.map((evaluation) => {
                                                    switch (evaluation.veredict) {
                                                        case "FAILED":
                                                            return <option style={{ color: 'red', fontWeight: 'bold' }}>{evaluation.veredict}</option>
                                                        case "SOLVED":
                                                            return <option style={{ color: 'green', fontWeight: 'bold' }}>{evaluation.veredict}</option>
                                                        case "SENT":
                                                            return <option style={{ fontWeight: 'bold' }}>{evaluation.veredict}</option>

                                                    }
                                                })}
                                            </select>
                                        </Styledtd>
                                    </StyledTableRow>) : null
                            })}
                        </tbody>
                    </StyledTable>
                </> : <Dialog title="There are no available problems for this minicourse" />
            }

        </TableContainer>
    )
};

export default ProblemsList;