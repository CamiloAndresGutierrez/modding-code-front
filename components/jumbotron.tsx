import react from 'react';
import styled from 'styled-components';
import { mediaQueries } from 'lib/constants';

const StyledJumbotron = styled.div`
  margin: 50px 0;
  padding: 40px 0;
  min-height: 150px;
  box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.1);
  display: flex;

  .content {
      max-width: 1500px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-between;
      flex-basis: 100%;

      @media (${mediaQueries.tabletAndAbove}) {
          padding: 0 100px;
      }

      @media (${mediaQueries.tablet}) {
          flex-direction: column;
      }
  }

  .text {
      width: 50%;

      & > h1 {
          font-size: 2rem;
          line-height: 47px;
      }
      & > p {
          font-size: 1rem;
          line-height: 21px;
      }

      @media (${mediaQueries.tablet}) {
          width: 100%;
          padding-bottom: 0;
      }
  }

  .children{
    width: 50%;

    @media (${mediaQueries.tablet}) {
      width: 100%;
    }
  }

  @media (${mediaQueries.tablet}) {
      padding: 40px 40px;
  }

`;


const Jumbotron = (props) => {
  const {headline, text, children} = props;

  return (
    <StyledJumbotron>
      <div className={"content"}>
        <div className={"text"}>
          <h1>{headline}</h1>
          <p>{text}</p>
        </div>
        <div className={"children"}>{children}</div>
      </div>
    </StyledJumbotron>
  );
}

export default Jumbotron;
