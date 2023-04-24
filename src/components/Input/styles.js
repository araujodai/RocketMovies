import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    border: none;
    padding: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
      margin-left: 1.6rem;
    }
`;