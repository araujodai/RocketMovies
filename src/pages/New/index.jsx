import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

import { Container, Form, Section, ButtonDelete } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  };

  function handleAddTag() {
    if (newTag == "") {
      return alert("Não é possível adicionar um marcador vazio.");
    };

    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite um título");
    };

    if (!rating) {
      return alert("Digite uma nota de 0 a 5.");
    };

    if (tags.length === 0) {
      return newTag ? alert("Você deixou um marcador pendente, clique no botão + para adicionar.") : alert("Adicione ao menos um marcador para continuar. ")
    };

    if (newTag) {
      return alert("Você deixou um marcador pendente, clique no botão + para adicionar.");
    };

    await api.post("/movies", {
      title,
      rating,
      description,
      tags
    });

    alert("Filme adicionado com sucesso!");
    navigate(-1);
  };

  return (
    <Container>
      <Header />

      <main>
        <ButtonText
          title="Voltar"
          icon={FiArrowLeft}
          onClick={handleBack}
        />

        <ContentWrapper>
          <Form>
            <h1>Novo filme</h1>

            <div>
              <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)} 
              />

              <Input 
                placeholder="Sua nota (de 0 a 5)" 
                onChange={e => setRating(e.target.value)} 
              />
            </div>

            <Textarea 
              placeholder="Descrição" 
              onChange={e => setDescription(e.target.value)}
            />

            <Section>
              <h2>Marcadores</h2>
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <MovieItem 
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
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
              <ButtonDelete 
                title="Descartar nota" 
                onClick={handleBack}
              />

              <Button 
                title="Criar nota" 
                onClick={handleNewMovieNote}
              />
            </div>

          </Form>
        </ContentWrapper>
      </main>

    </Container>
  );
};