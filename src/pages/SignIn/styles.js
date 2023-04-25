import styled from "styled-components";
import backgroundImg from "../../assets/salaDeCinema.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.4rem;
  align-self: center;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    margin-bottom: 4.8rem;
    align-self: flex-start;
  }

  > fieldset {
    border: none;
    width: 100%;

    legend {
      font-size: 2.4rem;
      margin-bottom: 4.8rem;
    }

    div {
      margin-bottom: 0.8rem;
      
      input {
      font-size: 1.6rem;

      ::placeholder {
        font-size: 1.4rem;
      }
    }

    }

    button {
      margin: 1.6rem 0 4.2rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;