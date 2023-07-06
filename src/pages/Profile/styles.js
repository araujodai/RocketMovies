import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
    padding-inline: 8rem;

    display: flex;
    align-items: center;

    button {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
      font-size: 1.6rem;

      background: none;
      border: none;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
      font-size: 2.4rem;
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: -9.3rem auto 0;
  padding-bottom: 3rem;

  > div {
    margin-bottom: 0.8rem;

    input {
      font-size: 1.6rem;

      ::placeholder {
        font-size: 1.4rem;
      }
    }
  }

  > div:first-child {
    margin: 0 auto 6.4rem;
  }

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 1.8rem;
  }
`;

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  position: relative;

  > img {
    border-radius: 50%;
    width: 100%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

  }
`;