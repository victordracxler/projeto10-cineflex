import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FILMES from "./mock";
import MovieCard from "./MovieCard";

export default function MoviesPage() {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(url)

        promise.then(res => setMovieList(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])


  return (
    <>
      <SelectTitle>Selecione o filme</SelectTitle>
      <CardsContainer>{movieList.map((movie) => MovieCard(movie))}</CardsContainer>
    </>
  );
}

const SelectTitle = styled.h1`
  height: 110px;
  margin-top: 67px;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #293845;

`;

const CardsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
