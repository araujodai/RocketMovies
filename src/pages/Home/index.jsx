import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

import { Container, NewMovie } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <NewMovie>
          Adicionar filme
        </NewMovie>
      </div>

      <Content></Content>
    </Container>
  );
};