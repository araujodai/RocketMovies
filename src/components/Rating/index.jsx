import { HiStar, HiOutlineStar } from "react-icons/hi";

import { Container } from "./styles";

export function Rating({ size }) {
  return (
    <Container>
      <HiStar size={size} />
      <HiStar size={size} />
      <HiStar size={size} />
      <HiStar size={size} />
      <HiOutlineStar size={size} />
    </Container>
  );
};