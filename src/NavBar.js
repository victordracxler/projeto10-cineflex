import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <Barra>
      {pathname !== "/" && (
        <ion-icon
          onClick={() => navigate(-1)}
          name="arrow-back-outline"
        ></ion-icon>
      )}

      <Link to={`/`} style={{ textDecoration: "none" }}>
        <h1>CINEFLEX</h1>
      </Link>
    </Barra>
  );
}

const Barra = styled.div`
  text-decoration: none;
  height: 67px;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2;
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

  ion-icon {
    position: absolute;
    left: 15px;
    font-size: 26px;
    color: #e8833a;
  }
`;
