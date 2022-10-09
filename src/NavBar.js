import styled from "styled-components";

export default function NavBar() {
  return (
    <Barra>
      <h1>CINEFLEX</h1>
    </Barra>
  );
}

const Barra = styled.div`
  height: 67px;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #e8833a;
  }
`;