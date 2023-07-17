import { HiStar, HiOutlineStar } from "react-icons/hi";

import { Container } from "./styles";

export function Rating({ size, number }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= number) {
      stars.push(<HiStar size={size} key={i} />);
    } else {
      stars.push(<HiOutlineStar size={size} key={i} />);
    }
  }

  return (
    <Container>
      {stars}
    </Container>
  );
};