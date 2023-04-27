import { Tag } from "../Tag";

import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};

  border-radius: 1.6rem;
  padding: 3.2rem;
  
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-block: 1.5rem;
    line-height: 1.9rem;
    
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
  }

  &:hover {
    filter: brightness(1.2);
  }

  > footer {
    overflow: hidden;
    text-overflow: ellipsis;
  }

`;

export const MovieTags = styled(Tag)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding-block: 0.5rem;
`;