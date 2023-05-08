import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Movie } from "../../components/Movie";

import { Container, TitleWrapper, NewMovie } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <TitleWrapper>
          <h1>Meus filmes</h1>

          <NewMovie>
            <FiPlus size={16} />
            Adicionar filme
          </NewMovie>
        </TitleWrapper>

        <ContentWrapper>

          <Movie data={{
            title: "Interestellar",
            description: `
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida.
            `,
            tags: [
              { id: "1", name: "scifi" },
              { id: "2", name: "drama" },
              { id: "3", name: "aventura" }
            ]
          }} />

          <Movie data={{
            title: "Interestellar",
            description: `
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida.
            `,
            tags: [
              { id: "1", name: "scifi" },
              { id: "2", name: "drama" },
              { id: "3", name: "aventura" }
            ]
          }} />

          <Movie data={{
            title: "Interestellar",
            description: `
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida.
            `,
            tags: [
              { id: "1", name: "scifi" },
              { id: "2", name: "drama" },
              { id: "3", name: "aventura" }
            ]
          }} />

        </ContentWrapper>
      </main>
    </Container>
  );
};

