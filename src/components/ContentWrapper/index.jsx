import { Container } from "./styles";

export function ContentWrapper({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
};