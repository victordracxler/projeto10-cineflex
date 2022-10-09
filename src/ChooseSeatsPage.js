import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function ChooseSeatsPage() {
  const params = useParams();
  const [seats, setSeats] = useState([]);
  const [sessionInfo, setSessionInfo] = useState([]);

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`;

    const promise = axios.get(url);

    promise.then((res) => {
      console.log(res.data);
      setSeats(res.data.seats);
      setSessionInfo({
        day: res.data.day.weekday,
        time: res.data.name,
        title: res.data.movie.title,
        posterURL: res.data.movie.posterURL,
      });
    });
    promise.catch((err) => console.log(err.response.data));
  }, []);

  console.log("seats", seats);
  console.log("sessionInfo", sessionInfo);

  function SeatCircle(props) {
    console.log(props);
    return <SeatBttn></SeatBttn>;
  }

  return (
    <>
      <SelectTitle>Selecione o(s) assento(s)</SelectTitle>
      <div>Legenda</div>

      <div>
        Dados do comprador
        <form action="">
          <label htmlFor=""></label>
          <input type="text" />

          <label htmlFor=""></label>
          <input type="text" />
        </form>
      </div>

      <Footer
        title={sessionInfo.title}
        posterURL={sessionInfo.posterURL}
        day={sessionInfo.day}
        time={sessionInfo.time}
      />
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

const SeatBttn = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 12px;
`;
