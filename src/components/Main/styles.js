import styled from "styled-components";

export const Container = styled.main`
    max-width: 1113px;
    margin: 4rem auto;
    border: 1px solid red;

    a {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
`;