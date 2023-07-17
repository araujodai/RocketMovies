import styled from "styled-components";

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
    grid-template-columns: auto minmax(33rem, 117.7rem) auto;
    grid-auto-rows: min-content auto;
    grid-template-areas: 
    ". TitleWrapper ."
    ". ContentWrapper .";

    overflow: hidden;
    padding-block: 4rem;

    > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      
      grid-area: TitleWrapper;
      margin-bottom: 2.4rem;
    }

    > div > .description {
        grid-area: ContentWrapper;

        margin-top: 4rem;
        line-height: 21px;
        text-align: justify;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .title, .subtitle, span {
    display: flex;
    align-items: center;
  }

  > .title {
    gap: 1.9rem;
  }

  > .subtitle {
    gap: 1.5rem;

    .user img {
      width: 1.6rem;
      border-radius: 3.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
      margin-right: 0.8rem;
    }

    .createdAt svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
      margin-right: 0.8rem;
    }
  }
`;

export const Tags = styled.div`
  padding-top: 4rem;
  line-height: 4.2rem;
  word-break: break-all;  
`;
