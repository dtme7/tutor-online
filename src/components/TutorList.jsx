import React from "react";
import "./Tutorlist.css";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

function TutorList({ filters }) {
  const navigate = useNavigate();

  const normalizeString = (str) => {
    if (!str) return "";
    return str.toString().toLowerCase().trim();
  };

  const filteredTutors = data.filter((tutor) => {
    const hasMatchingSkills =
      filters.levels.length === 0 ||
      (tutor.skills &&
        tutor.skills.some((skill) =>
          filters.levels.some(
            (filterSkill) =>
              normalizeString(skill) === normalizeString(filterSkill)
          )
        ));

    const cityMatches =
      filters.cities.length === 0 ||
      filters.cities.some(
        (city) => normalizeString(tutor.city) === normalizeString(city)
      );

    const formatMatches =
      filters.classFormats.length === 0 ||
      filters.classFormats.some(
        (format) => normalizeString(tutor.classes) === normalizeString(format)
      );

    const priceMatches =
      tutor.coast >= filters.minPrice && tutor.coast <= filters.maxPrice;

    return hasMatchingSkills && cityMatches && formatMatches && priceMatches;
  });

  return (
    <div className="tutor-list">
      {filteredTutors.map((tutor) => (
        <div key={tutor.id} className="tutor-card">
          <div className="tutor-left">
            <img src={tutor.photo} alt={tutor.name} className="tutor-photo" />
            <div className="tutor-name">{tutor.name}</div>
            <div className="tutor-rating">
              Средняя оценка: <span className="stars">{tutor.rate} ★</span>
            </div>
          </div>

          <div className="tutor-middle">
            <p>
              <strong>Образование:</strong> {tutor.edu}
            </p>
            <p>
              <strong>Опыт:</strong> Более {tutor.experience} лет
            </p>
            <p>
              <strong>Обучение:</strong> {tutor.classes}
            </p>
            <p className="country">
              <strong>Город:</strong> {tutor.city}
            </p>
            <p className="tutor-desc">
              <strong>О репетиторе:</strong> {tutor.description.slice(0, 350)}
              ...
            </p>
            <button className="more-btn">Подробнее</button>
          </div>

          <div className="tutor-right">
            <div className="tutor-price">{tutor.coast} ₸/час</div>
            <button
              className="tutor-contact"
              onClick={() => navigate(`/tutor/${tutor.id}`)}
            >
              Связаться с репетитором
            </button>
            <div className="tutor-free">это бесплатно</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TutorList;
