import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Movie } from "../../components/Movie";

import { Container, TitleWrapper, NewMovie, Search } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    async function fetchMovieNotes() {
      try {
        const response = await api.get(`/movies?title=${search}`);
        setMovieNotes(response.data);

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);

        } else {
          alert("Sessão expirada, realize login novamente.");
          signOut();
        }
      }
    };

    fetchMovieNotes();
  }, [search]);

  return (
    <Container>

      <Header>
        <Search>
          <Input 
            type="text" 
            placeholder="Pesquisar pelo título" 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Search>
      </Header>

      <main>
        <TitleWrapper>
          <h1>Meus filmes</h1>

          <NewMovie to="/new" >
            <FiPlus size={16} />
            Adicionar filme
          </NewMovie>
        </TitleWrapper>

        <ContentWrapper>
          {
            movieNotes.map(note => (
              <Movie 
                key={String(note.id)}
                data={note} 
                onClick={() => handleDetails(note.id)}
              />
            ))     
          }
        </ContentWrapper>
      </main>
    </Container>
  );
};
