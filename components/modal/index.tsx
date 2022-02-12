import React, { useState } from 'react';
import {
  Container
} from './modal.styled-components.tsx';

const Modal = (props) => {
  const { children, shouldShow, setShouldShow } = props;

  return(
    <>
      { shouldShow && (
        <Container>
            <button
              onClick={() => setShouldShow()}
            >
              Close
            </button>
            {children}
        </Container>
      )}
    </>
  );
}

export default Modal;
