import { Rating } from "../Rating";

import { Container, MovieTags } from "./styles";

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest} >
      <h1>{data.title}</h1>
      <Rating 
        size={12}
        number={data.rating}
      />

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <MovieTags key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
};