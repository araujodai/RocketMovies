import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  height: 11.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme })=> theme.COLORS.BACKGROUND_600};
  padding: 0 8rem;
  font-size: 1.4rem;

  > h2 {
    color: ${({ theme })=> theme.COLORS.PRIMARY_COLOR};
    font-size: 2.4rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    font-size: 1.4rem;
    color: ${({ theme })=> theme.COLORS.WHITE_100};
    font-weight: 700;

    /* a {
      font-weight: 400;
      color: ${({ theme })=> theme.COLORS.GRAY_200};
    } */

    button {
      font-weight: 400;
      color: ${({ theme })=> theme.COLORS.GRAY_200};
      border: none;
      background: none;
      font-size: 1.4rem;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;

export const Search = styled.div`
  /* max-width: 63rem;
  flex-grow: 1; */
  width: 50%;
  /* font-size: 1.4rem; */

  /* > input {
    font-size: 1.4rem;
  } */
`;