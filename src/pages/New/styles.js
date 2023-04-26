import styled from "styled-components";

import { Button } from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding-bottom: 2rem;

  display: grid;
  grid-template-rows: 11.6rem 6.1rem auto;
  grid-template-columns: auto minmax(33rem, 113.7rem) auto;
  grid-template-areas: 
  "header header header"
  ". button ."
  ". main .";

  > button {
    grid-area: button;
    justify-self: start;
    margin-top: 4rem;
  }

  > main {
    margin-top: 2.4rem;
  }
`;

export const Form = styled.form`
  > h1 {
    margin-bottom: 4rem;
  }

  > div {
    display: flex;
    gap: 4rem;

    input {
      font-size: 1.6rem;
      width: 100%;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 4rem;

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > .tags {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.6rem;
    border-radius: 0.8rem;
  }
`;

export const ButtonDelete = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;