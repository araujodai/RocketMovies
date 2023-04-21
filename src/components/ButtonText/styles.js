import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.button`
  border: none;
  background: transparent;

  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  height: 2.1rem;
`;