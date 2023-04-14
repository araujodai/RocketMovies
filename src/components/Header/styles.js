import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme })=> theme.COLORS.BACKGROUND_700};
  padding: 0 8rem;

  > h2 {
    color: ${({ theme })=> theme.COLORS.PRIMARY_COLOR};
    font-size: 2.4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: 1.4rem;

    a {
      font-weight: 400;
      color: ${({ theme })=> theme.COLORS.GRAY_200};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;