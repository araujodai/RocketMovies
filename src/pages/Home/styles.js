import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "main";

  > main {
    grid-area: main;

    display: grid;
    grid-template-rows: 4.8rem auto;
    grid-template-columns: auto minmax(33rem, 113.7rem) auto;
    grid-template-areas: 
    ". TitleWrapper ."
    ". ContentWrapper .";

    overflow: hidden;
    padding: 4.7rem 0 4rem 0;


    > div:nth-child(2) {
      margin-top: 3.7rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
  }
`;

export const TitleWrapper = styled.div`
  grid-area: TitleWrapper;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
      font-size: 3.2rem;
      font-weight: 400;
    }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 8px;
  padding: 1.3rem 3.2rem;

  font-size: 1.6rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;