import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

export function Edit() {
  const [data, setData] = useState(null);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const params = useParams();
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

  async function handleUpdateMovieNote() {
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

    await api.put(`/movies/${params.id}`, {
      title,
      rating,
      description,
      tags
    });

    alert("Filme atualizado com sucesso!");
    navigate(-2);
  };

  async function handleRemoveMovieNote() {
    const confirm = window.confirm("Você está prestes a remover essa nota, deseja prosseguir?");

    if(confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-2);
    };
  };

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)

      setTitle(response.data.title);
      setRating(response.data.rating);
      setDescription(response.data.description);
      setTags(response.data.tags.map(tag => tag.name));
    };

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <ButtonText
          title="Descartar alterações"
          // icon={FiArrowLeft}
          onClick={handleBack}
        />

        <ContentWrapper>
          <Form>
            <h1>Editar filme</h1>

            <div>
              <Input 
                placeholder="Digite um título"
                value={title}
                onChange={e => setTitle(e.target.value)} 
              />

              <Input 
                placeholder="Sua nota (de 0 a 5)" 
                value={rating}
                onChange={e => setRating(e.target.value)} 
              />
            </div>

            <Textarea 
              placeholder="Descrição" 
              onChange={e => setDescription(e.target.value)}
              value={description}
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
                title="Excluir nota" 
                onClick={handleRemoveMovieNote} />

              <Button 
                title="Salvar alterações" 
                onClick={handleUpdateMovieNote}
              />
            </div>

          </Form>
        </ContentWrapper>
      </main>

    </Container>
  );
};