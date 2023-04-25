import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Content } from "../../components/Content";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
// import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form, Section, ButtonDelete } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <ButtonText
        title="Voltar"
        icon={FiArrowLeft}
      />

      <Content>
        <Form>
          <h1>Novo filme</h1>

          <div className="teste">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Descrição" />

          <Section title="Marcadores">
            <div className="tags">
              {/* <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" /> */}
            </div>

            <div className="buttons">
              <ButtonDelete title="Excluir nota" />
              <Button title="Salvar alterações" />

            </div>
          </Section>
        </Form>
      </Content>
    </Container>
  );
};