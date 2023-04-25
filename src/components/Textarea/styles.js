import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  padding: 1.9rem 1.6rem;

  border: none;
  resize: none;
  border-radius: 1rem;
  margin-block: 4rem;

  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;