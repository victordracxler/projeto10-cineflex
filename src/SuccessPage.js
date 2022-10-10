import styled from "styled-components";

export default function SuccessPage(props) {

    console.log(props)
  return (
    <>
      <SelectTitle>Pedido feito com sucesso!</SelectTitle>
      <InfoRow>
        <h1>Filme e sessão</h1>
        <p>Enola</p>
        <p>Horario e dia</p>
      </InfoRow>
    </>
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
