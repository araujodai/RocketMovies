import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";

import { Container, Profile, Search } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Search>
        <Input type="text" placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <div>
          <span>Daiane Araújo</span>
          <button type="button" onClick={signOut}>sair</button>
        </div>
        <img
          src="https://github.com/araujodai.png"
          alt="Foto de perfil do usuário"
        />
      </Profile>

    </Container>
  );
};