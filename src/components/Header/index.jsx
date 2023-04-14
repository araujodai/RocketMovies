import { Input } from "../Input";

import { Container, Profile, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Search>
        <Input type="text" placeholder="Pesquisar pelo título" />
      </Search>
      <Profile>
        <div>
          <strong>Daiane Araújo</strong>
          <a href="/">sair</a>
        </div>
        <img
          src="https://github.com/araujodai.png"
          alt="Foto de perfil do usuário"
        />
      </Profile>

    </Container>
  );
};