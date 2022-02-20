import React from 'react';
import {
  ButtonContainer,
  Container, ModalContainer
} from './modal.styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Modal = (props) => {
  const { children, shouldShow, setShouldShow } = props;

  return (
    <>
      {shouldShow && (
        <Container>
          <ModalContainer>
            <ButtonContainer>

              <button
                onClick={() => setShouldShow()}
              >
                <CloseIcon />
              </button>
            </ButtonContainer>
            {children}
          </ModalContainer>
        </Container>
      )}
    </>
  );
}

export default Modal;
