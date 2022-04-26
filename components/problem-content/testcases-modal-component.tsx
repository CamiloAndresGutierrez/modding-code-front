import React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    ButtonWithIcons,
    Header,
    StyledTableHead,
    TableRow,
    TestCasesContainer
} from './problem-content.styled-components'

const TestCasesModalComponent = ({
    handleCreateTest,
    newTestCase,
    handleUploadTestCases,
    inputRef,
    outputRef,
    handleInputFile,
    problem
}) => (
    <TestCasesContainer>
        <Header>
            <h1>Test cases</h1>
            <button onClick={() => handleCreateTest(true)}>Create test</button>
        </Header>
        <div>
            <table>
                <StyledTableHead>
                    <tr>
                        <th>Input</th>
                        <th>Output</th>
                    </tr>
                </StyledTableHead>
                <tbody>
                    {
                        (problem.test_case || []).map(testCase => (
                            <TableRow key={testCase.id}>
                                <td>{testCase.input_name}</td>
                                <td>{testCase.output_name}</td>
                                <td><ButtonWithIcons><DeleteIcon /></ButtonWithIcons></td>
                            </TableRow>
                        ))
                    }
                    {
                        newTestCase && (
                            <TableRow>
                                <th>
                                    <input type={"file"} accept="text/plain" ref={inputRef} onChange={() => handleInputFile("input")} />
                                </th>
                                <th>
                                    <input type={"file"} accept="text/plain" ref={outputRef} onChange={() => handleInputFile("output")} />
                                </th>
                                <th>
                                    <ButtonWithIcons onClick={() => handleUploadTestCases()} ><SaveIcon /></ButtonWithIcons>
                                </th>
                                <th>
                                    <ButtonWithIcons onClick={() => handleCreateTest(false)} ><DeleteIcon /></ButtonWithIcons>
                                </th>
                            </TableRow>
                        )
                    }
                </tbody>
            </table>
        </div>
    </TestCasesContainer>
)

export default TestCasesModalComponent;