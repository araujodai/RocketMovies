import { HiStar, HiOutlineStar } from "react-icons/hi";

import { Container } from "./styles";

export function Rating() {
  return (
    <Container>
      <HiStar size={20} />
      <HiStar size={20} />
      <HiStar size={20} />
      <HiStar size={20} />
      <HiOutlineStar size={20} />
    </Container>
  );
};