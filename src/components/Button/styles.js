import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 1rem;
  padding-block: 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: 1.6rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;

    :hover {
      filter: none;
      cursor: not-allowed;
    }
   
  }


`;