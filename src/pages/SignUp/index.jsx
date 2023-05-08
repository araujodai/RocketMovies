import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <fieldset>
          <legend>Crie sua conta</legend>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
          />

          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />

          <Button title="Cadastrar" />
        </fieldset>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  );
};