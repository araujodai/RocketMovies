import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, User, Profile} from "./styles";

export function Header({ children }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h2>
        RocketMovies
      </h2>

      {children}

      <div>
        <User>
          <strong>
            {user.name}
          </strong>

          <button type="button" onClick={signOut}>sair</button>
        </User>

        <Profile>
          <img
            src={avatarUrl}
            alt="Foto de perfil do usuário"
          />
        </Profile>
      </div>
    </Container>
  );
};