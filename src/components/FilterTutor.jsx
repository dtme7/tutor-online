import React, { useState } from "react";
import "./FilterTutor.css";
function FilterTutor() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [price, setPrice] = useState(15000);

  const handlePriceSubmit = () => {
    if (price < minPrice) setPrice(minPrice);
    if (price > maxPrice) setPrice(maxPrice);
  };
  return (
    <div className="filter">
      <h2>Фильтр</h2>
      <div className="filter-item">
        <h2>Предмет </h2>
        <p>Математика</p>
      </div>
      <div className="filter-item">
        <h2>Уровень подготовки</h2>
        <input
          type="text"
          placeholder="Введите уровень подготовки"
          className="search-filter"
        />
        <label>
          <input type="checkbox" />
          <span>7-9 классы (школьная программа)</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>10-11 классы (школьная программа)</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Подготовка к ЕНТ</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Младшие классы 1-4</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>5-6 классы (школьная программа)</span>
        </label>
      </div>
      <div className="filter-item">
        <h2>Как вы хотите обучаться?</h2>
        <button className="online-btn">Онлайн</button>
        <button className="offline-btn">Офлайн</button>
      </div>
      <div className="filter-item">
        <h2>Город</h2>
        <input type="text" placeholder="Введите город" />
        <label>
          <input type="checkbox" />
          <span>Алматы</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Астана</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Шымкент</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Караганда</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Актау</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Ташкент</span>
        </label>
      </div>

      <div className="filter-item">
        <h2>Цена</h2>

        <div className="manual-price">
          <p>от</p>
          <input type="number"  />
          <p>до</p>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <button onClick={handlePriceSubmit}>ОК</button>
        </div>

        <div className="price-range">
          <span>{minPrice}₸</span>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="500"
            value={price}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <span>{maxPrice}₸</span>
        </div>
      </div>
    </div>
  );
}
export default FilterTutor;
