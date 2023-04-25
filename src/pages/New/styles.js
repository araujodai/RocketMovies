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
`;

export const Form = styled.form`
  > div.teste {
    display: flex;
    gap: 4rem;
  }

  input {
    font-size: 1.6rem;
  }
`;

export const TextArea = styled.textarea``;

export const Section = styled.section``;

export const ButtonDelete = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;