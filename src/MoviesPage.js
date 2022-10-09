// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import FILMES from "./mock";
import MovieCard from "./MovieCard";

export default function MoviesPage(params) {
  return (
    <>
      <SelectTitle>Selecione o filme</SelectTitle>
      <CardsContainer>{FILMES.map((movie) => MovieCard(movie))}</CardsContainer>
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
