import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 6.1rem auto;
  grid-template-areas: 
  "header"
  "button"
  "content";
  padding-bottom: 4rem;

  > button {
    grid-area: button;
    justify-self: start;
    margin: 4rem auto 0 7rem;
  }

  > main {
    margin-top: 2.4rem;

    /* div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 2.4rem;
      gap: 1.9rem;

      background-color: red;;

      h1 {
        font-size: 3.6rem;
      }
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      background: lightblue;

      > img {
        width: 16px;
        border-radius: 50%;
      }

      > svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
      }
    }

    > p {
      margin-top: 4rem;
      text-align: justify;
    } */
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    align-items: center;
  }

  .title {
    gap: 1.9rem;
  }

  .subtitle {
    
    
    img {
      width: 1.6rem;
      border-radius: 3.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    gap: 1rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
  }
`;

export const Tags = styled.div`
  padding-block: 4rem;
`;