import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import CORES from "./mock";

export default function ChooseSeatsPage() {
  const params = useParams();
  const [seats, setSeats] = useState([]);
  const [sessionInfo, setSessionInfo] = useState([]);
  const {
    lightGreen,
    darkGreen,
    lightYellow,
    darkYellow,
    lightGray,
    darkGray,
  } = CORES;
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`;

    const promise = axios.get(url);

    promise.then((res) => {
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

  //   console.log(seats);

  function HandleSeatClick(seat) {
    const { id, name, isAvailable } = seat;
    if (isAvailable === false) {
      return;
    }

    if (!selected.includes(id)) {
      const arr = [...selected, id];
      setSelected(arr);
      console.log(arr);
    } else {
      const index = selected.indexOf(id);
      const arr = [...selected];
      arr.splice(index, 1);
      setSelected(arr);
      console.log(arr);
    }
  }

  function RenderSeat(seat) {
    const { id, name, isAvailable } = seat;
    const isSelected = (selected.includes(id))

    if (isAvailable === false) {
      return (
        <SeatBttn key={id} light={lightYellow} dark={darkYellow}>
          {name}
        </SeatBttn>
      );
    }

    return (
      <SeatBttn
        onClick={() => HandleSeatClick(seat)}
        key={id}
        light={isSelected ? lightGreen : lightGray}
        dark={isSelected ? darkGreen : darkGray}
      >
        {name}
      </SeatBttn>
    );
  }

  return (
    <>
      <SelectTitle>Selecione o(s) assento(s)</SelectTitle>
      <SeatsContainer>{seats.map(RenderSeat)}</SeatsContainer>

      <LegendContainer>
        <div>
          <LegendBttn light={lightGreen} dark={darkGreen}></LegendBttn>
          <p>Selecionado</p>
        </div>
        <div>
          <LegendBttn light={lightGray} dark={darkGray}></LegendBttn>
          <p>Disponível</p>
        </div>
        <div>
          <LegendBttn light={lightYellow} dark={darkYellow}></LegendBttn>
          <p>Indisponível</p>
        </div>
      </LegendContainer>

      <BuyerForm>
        <label htmlFor="buyerName">Nome do comprador:</label>
        <input type="text" id="buyerName" placeholder="Digite seu nome..." />

        <label htmlFor="buyerCPF">CPF do comprador:</label>
        <input type="text" id="buyerCPF" placeholder="Digite seu CPF..." />

        <button type="submit">Reservar assento(s)</button>
      </BuyerForm>

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

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const SeatBttn = styled.button`
  height: 26px;
  width: 26px;
  border-radius: 12px;
  background-color: ${(props) => props.light};
  border: 1px solid ${(props) => props.dark};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 9px 4px;

  font-family: "Roboto";
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-align: center;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 42px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LegendBttn = styled(SeatBttn)`
  background-color: ${(props) => props.light};
  border: 1px solid ${(props) => props.dark};
`;

const BuyerForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  padding: 0 24px;

  label {
    color: #293845;
  }
  input {
    height: 51px;
    border-radius: 3px;
    border: 1px solid #d5d5d5;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 7px;
    padding: 0 18px;
  }

  button {
    height: 42px;
    width: 225px;
    border-radius: 3px;

    color: #ffffff;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    background-color: #e8833a;
    border: none;
    align-self: center;

    margin-top: 50px;
  }
`;
