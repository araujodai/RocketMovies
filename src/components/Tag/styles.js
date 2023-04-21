import styled from "styled-components";

export const Container = styled.span`
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
  border-radius: 0.8rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  margin-right: 0.8rem;
`;