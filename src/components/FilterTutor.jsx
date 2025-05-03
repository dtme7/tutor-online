import React from "react";
import "./FilterTutor.css";

function FilterTutor({ filters, setFilters }) {
  const handleLevelChange = (level) => {
    setFilters((prev) => {
      const levels = prev.levels.includes(level)
        ? prev.levels.filter((l) => l !== level)
        : [...prev.levels, level];
      return { ...prev, levels };
    });
  };

  const handleCityChange = (city) => {
    setFilters((prev) => {
      const updatedCities = prev.cities.includes(city)
        ? prev.cities.filter((c) => c !== city)
        : [...prev.cities, city];
      return { ...prev, cities: updatedCities };
    });
  };

  const handleClassFormat = (format) => {
    setFilters((prev) => {
      const updatedFormat = prev.classFormats.includes(format)
        ? prev.classFormats.filter((f) => f !== format)
        : [...prev.classFormats, format];
      return { ...prev, classFormats: updatedFormat };
    });
  };

  const handlePriceChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: Number(value),
    }));
  };

  return (
    <div className="filter">
      <h2>Фильтр</h2>

      <div className="filter-item">
        <h3>Уровень подготовки</h3>
        {[
          "7-9 классы (школьная программа)",
          "10-11 классы (школьная программа)",
          "Подготовка к ЕНТ",
          "Младшие классы 1-4",
          "5-6 классы (школьная программа)",
        ].map((level) => (
          <label key={level}>
            <input
              type="checkbox"
              checked={filters.levels.includes(level)}
              onChange={() => handleLevelChange(level)}
            />
            <span>{level}</span>
          </label>
        ))}
      </div>

      <div className="filter-item">
        <h3>Как вы хотите обучаться?</h3>
        {[
          { value: "online", label: "Онлайн" },
          { value: "offline", label: "Офлайн" },
        ].map((format) => (
          <label key={format.value}>
            <input
              type="checkbox"
              checked={filters.classFormats.includes(format.value)}
              onChange={() => handleClassFormat(format.value)}
            />
            <span>{format.label}</span>
          </label>
        ))}
      </div>

      <div className="filter-item">
        <h3>Город</h3>
        {["Алматы", "Астана"].map((city) => (
          <label key={city}>
            <input
              type="checkbox"
              checked={filters.cities.includes(city)}
              onChange={() => handleCityChange(city)}
            />
            <span>{city}</span>
          </label>
        ))}
      </div>

      <div className="filter-item">
        <h3>Цена</h3>
        <div className="manual-price">
          <p>от</p>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => handlePriceChange("minPrice", e.target.value)}
          />
          <p>до</p>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterTutor;
