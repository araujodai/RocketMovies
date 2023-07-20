import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { format } from "date-fns";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Header } from "../../components/Header";
import { ContentWrapper } from "../../components/ContentWrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { Container, HeaderContent, Tags } from "./styles";

export function Details() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const [formattedHours, setFormattedHours] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  };

  function handleEdit() {
    navigate(`/details/${params.id}/edit`);
  };

  async function formatTime(datetime) {
    const dateAndTime = await datetime.split(" ");
    const time = dateAndTime[1];

    const hours = time.split(":")[0]

    setFormattedHours(hours - 3);
  };
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data);
      formatTime(response.data.updated_at)
    };

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <div>
            <ButtonText
              title="Voltar"
              icon={FiArrowLeft}
              onClick={handleBack}
            />

            <ButtonText
              title="Editar"
              icon={FiEdit}
              onClick={handleEdit}
            />
          </div>

          <ContentWrapper>
            <HeaderContent>
              <div className="title">
                <h1>
                  {data.title}
                </h1>
                <Rating size={20} number={data.rating} />
              </div>

              <div className="subtitle">
                <span className="user">

                  <img 
                    src={avatarUrl} 
                    alt
                    ="Foto do usuário." 
                  />
                  <p>
                    Por {user.name}
                  </p>
                </span>

                <span className="createdAt">
                  <BiTime size={16} />
                  <p>
                    {
                      format(
                        new Date(data.updated_at), 
                        `dd/MM/yy 'às' ${formattedHours}:mm`
                      )
                    }
                  </p>
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