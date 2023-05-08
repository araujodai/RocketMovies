import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

import { Container, Form, Section, ButtonDelete } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonText
          title="Voltar"
          icon={FiArrowLeft}
        />

        <ContentWrapper>
          <Form>
            <h1>Novo filme</h1>

            <div>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

            <Textarea placeholder="Descrição" />

            <Section>
              <h2>Marcadores</h2>
              <div className="tags">
                <MovieItem value="sci-fi" />
                <MovieItem isNew placeholder="Novo marcador" />
              </div>
            </Section>

            <div>
              <ButtonDelete title="Excluir nota" />
              <Button title="Salvar alterações" />
            </div>

          </Form>
        </ContentWrapper>
      </main>

    </Container>
  );
};