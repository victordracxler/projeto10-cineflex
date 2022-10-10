import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    cpf,
    name,
    seats: { nums },
    sessionInfo: {time, title, date },
  } = location.state;

  return (
    <ScreenContainer>
      <SelectTitle>Pedido feito com sucesso!</SelectTitle>
      <InfoRow>
        <h1>Filme e sessão</h1>
        <p data-identifier="movie-session-infos-reserve-finished">{title}</p>
        <p data-identifier="movie-session-infos-reserve-finished">
          {date} {time}
        </p>
      </InfoRow>

      <InfoRow>
        <h1>Ingressos</h1>
        {nums.map((num) => (
          <p data-identifier="seat-infos-reserve-finished">Assento {num}</p>
        ))}
      </InfoRow>

      <InfoRow>
        <h1>Comprador</h1>
        <p data-identifier="buyer-infos-reserve-finished">Nome: {name}</p>
        <p data-identifier="buyer-infos-reserve-finished">CPF: {cpf}</p>
      </InfoRow>

      <BackBttn
        data-identifier="back-to-home-btn"
        onClick={() => navigate("/")}
      >
        Voltar para Home
      </BackBttn>
    </ScreenContainer>
  );
}

const SelectTitle = styled.h1`
  height: 110px;
  margin-top: 67px;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #247a6b;
`;

const InfoRow = styled.div`
  color: #293845;
  font-family: Roboto;
  letter-spacing: 0.04em;
  text-align: left;
  margin: 0 0 30px 24px;
  align-self: flex-start;
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const BackBttn = styled.button`
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
  justify-self: center;

  margin-top: 50px;
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
