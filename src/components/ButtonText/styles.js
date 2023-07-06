import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background: none;
  border: none;
`;