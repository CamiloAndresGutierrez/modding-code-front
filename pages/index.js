import * as React from 'react';
import Base from 'components/Base';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow-y: hidden;
`;

function App() {
  return (
    <Base>
      <Container>
        <CircularProgress />
      </Container>
    </Base>
  )
}

export default App;