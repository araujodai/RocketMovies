import styled from "styled-components";

export const Container = styled.div`
    grid-area: ContentWrapper;
    overflow-y: auto;
    padding-right: 1rem;

    ::-webkit-scrollbar {
        width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
`;
