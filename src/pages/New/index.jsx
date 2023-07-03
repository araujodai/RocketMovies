import { useState } from "react";
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
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  return (
    <Container>
      <Header />

      <main>
        <ButtonText
          to="/"
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
                {
                  tags.map((tag, index) => (
                    <MovieItem 
                      key={String(index)}
                      value={tag}
                      onClick={() => {}}
                    />
                  ))
                }
                <MovieItem 
                  isNew 
                  placeholder="Novo marcador" 
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
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