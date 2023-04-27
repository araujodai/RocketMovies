import { Button } from "../../components/Button";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem 13.1rem auto;
  /* grid-template-rows: 11.6rem auto auto; */
  grid-template-columns: auto minmax(33rem, 113.7rem) auto;
  grid-template-areas: 
  "header header header"
  ". headerContent ."
  ". main ."
  ;

  > main {
    /* margin-top: 3.7rem; */
    background: green;
/* 
    article + article {
      margin-bottom: 2.4rem;
    } */

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-self: start;
  
  }
  > header {
    position: absolute;
  }

  padding-bottom: 4rem;

`;

export const NewMovie = styled(Button)`
  padding: 3.2rem;
  max-width: 20.7rem;
  
`;
export const HeaderContent = styled.div`
    height: 4.8rem;
    grid-area: headerContent;
    background: red;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.7rem;
    border: 1px solid red;
    position: relative;

    h1 {
      font-size: 3.2rem;
      font-weight: 400;
    }
`;