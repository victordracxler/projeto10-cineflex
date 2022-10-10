import styled from "styled-components";
import { Link } from "react-router-dom";


export default function MovieCard(movie) {
  const { id, posterURL, title } = movie;

  return (
    <Link to={`/sessoes/${id}`}>
    <Card key={id} id={id}>
      <img src={posterURL} alt={title} />
    </Card>
    </Link>
  );
}

const Card = styled.li`
  height: 209px;
  width: 145px;
  border-radius: 3px;
  padding: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin: 0 15px 11px 15px;

  img {
    height: 193px;
    width: 129px;
  }
`;
