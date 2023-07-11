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
    /* max-width: 1200px;
    justify-self: center; */

    display: grid;
    grid-template-columns: auto minmax(33rem, 117.7rem) auto;
    grid-auto-rows: min-content auto;
    grid-template-areas: 
    ". TitleWrapper ."
    ". ContentWrapper .";

    overflow: hidden;
    padding: 4rem;


    > div:nth-child(2) {
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
  margin-bottom: 3.7rem;

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

export const Search = styled.div`
  /* max-width: 63rem;
  flex-grow: 1; */
  width: 50%;
  /* font-size: 1.4rem; */

  /* > input {
    font-size: 1.4rem;
  } */
`;