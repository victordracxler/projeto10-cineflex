import styled from "styled-components";

export default function Footer(props) {
  const { title, posterURL, day, time } = props;

  return (
    <FooterContainer>
      <img src={posterURL} alt={title} data-identifier="movie-img-preview"/>
      <div data-identifier="movie-and-session-infos-preview">
        <h1>{title}</h1>
        {day != undefined && (<h1>{day} - {time}</h1>)}
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 117px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  padding: 14px 10px;

  display: flex;
  align-items: center;

  img {
    height: 89px;
    width: 64px;
    border-radius: 2px;
    margin-right: 14px;
    border: 8px solid #ffffff;
  }

  h1 {
    font-family: Roboto;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    height: 40px;
    color: #293845;
  }
`;
