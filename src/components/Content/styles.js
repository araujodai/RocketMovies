import styled from "styled-components";

export const Container = styled.main`
    grid-area: main;
    /* max-width: 1137px;
    justify-self: center; */
    overflow-y: scroll;
    padding-right: 1rem;

    ::-webkit-scrollbar {
        width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
`;