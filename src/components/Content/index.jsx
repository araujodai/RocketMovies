import { FiArrowLeft } from "react-icons/fi";

import { ButtonText } from "../ButtonText";

import { Container } from "./styles";

export function Content({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
};