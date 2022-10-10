import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionCard(day) {
  const { date, id, weekday, showtimes } = day;

  
  function TimeButton(time) {
    const { name, id } = time;

    return (
        <Link to={`/assentos/${id}`}>
        <button data-identifier="hour-minute-btn">{name}</button>
        </Link>
    );
  }

  return (
    <SessionRow key={id}>
      <h2 data-identifier="session-date">
        {weekday} - {date}
      </h2>
      <div>{showtimes.map((time) => TimeButton(time))}</div>
    </SessionRow>
  );
}

const SessionRow = styled.li`
    margin: 0 0 24px 24px;

  h2 {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: #293845;
  }

  button {
    height: 43px;
    width: 82px;
    border-radius: 3px;
    color: #ffffff;
    background-color: #e8833a;
    border: none;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;

    margin: 22px 8px 0 0;
  }
`;
