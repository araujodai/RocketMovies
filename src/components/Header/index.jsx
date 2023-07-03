import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile, Search } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Search>
        <Input type="text" placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <div>
          <span>
            {user.name}
          </span>
          <button type="button" onClick={signOut}>sair</button>
        </div>
        <img
          src={avatarUrl}
          alt="Foto de perfil do usuário"
        />
      </Profile>

    </Container>
  );
};