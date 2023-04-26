import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-grow: 1;
  max-width: 23%;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
  
  padding: 1.6rem;
  border-radius: 1rem;

  > input {
    width: 100%;
    /* height: 5.6rem; */
    font-size: 1.6rem;
    display: flex;
    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > button {
    background: transparent;
    border: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
      font-size: 2.2rem;
      background: transparent;
    }
  }
`;
