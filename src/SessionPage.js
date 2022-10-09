import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import SessionCard from "./SessionCard";



export default function SessionPage() {
    const params = useParams()
    const [sessions, setSessions] = useState([])
    const idMovie = params.idFilme

    useEffect(() =>{
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`

        const promise = axios.get(url)

        promise.then(res => setSessions(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])
    
    console.log(sessions)
    return(
        <>
        <SelectTitle>
            Selecione o horário
        </SelectTitle>
        <ul>
            {(sessions.length != 0) && sessions.days.map(day => SessionCard(day))}
        </ul>
        <Footer title={sessions.title} posterURL={sessions.posterURL}/>
        </>
    )
};

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