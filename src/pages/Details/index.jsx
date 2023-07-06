import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ContentWrapper } from "../../components/ContentWrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { Container, HeaderContent, Tags } from "./styles";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data);
    };

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <ButtonText
            title="Voltar"
            icon={FiArrowLeft}
            onClick={handleBack}
          />

          <ContentWrapper>
            <HeaderContent>
              <div className="title">
                <h1>
                  {data.title}
                </h1>
                <Rating size={20} />
              </div>

              <div className="subtitle">
                <span className="user">
                  <img src="https://github.com/araujodai.png" alt="Foto do usuário." />
                  <p>Por Daiane Araújo</p>
                </span>

                <span className="createdAt">
                  <BiTime size={16} />
                  <p>18/08/23 às 19:42</p>
                </span>
              </div>
            </HeaderContent>

            {
              data.tags &&
              <Tags>
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name} 
                    />
                  ))
                }
              </Tags>
            }

            <p className="description">
              {data.description}
            </p>
          </ContentWrapper>
        </main>
      }


    </Container>
  );
};