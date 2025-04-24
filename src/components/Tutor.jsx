import React from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";
import "./Tutor.css";

function Tutor() {
  const { id } = useParams();
  const tutor = data.find((t) => String(t.id) === id);

  if (!tutor) return <div>Репетитор не найден</div>;

  return (
    <div>
      <nav className="menu">
        <a href="#">Репетиторы</a>
        <a href="#">Как это работает</a>
        <a href="#">Стать репетитором</a>
      </nav>

      <div className="tutor-card-wrapper">
        <div className="tutors">
          <img src={tutor.photo} alt={tutor.name} className="tutor-photo" />

          <div className="tutor-info">
            <h2>{tutor.name}</h2>
            <div className="rating"> {tutor.rate} ⭐ </div>
            <p>Языки преподавания: {tutor.languages.join(", ")}</p>

            <ul className="check-list">
              {tutor.checklist.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tutor-action">
            <button className="contact-button">Связаться с репетитором</button>
            <div className="price">{tutor.coast} тнг/час</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tutor;
