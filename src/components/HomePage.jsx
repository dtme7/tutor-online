import React, { useState } from "react";
import TutorList from "../components/TutorList";
import FilterTutor from "../components/FilterTutor";
import Header from "../components/Header";

const HomePage = () => {
  const [filters, setFilters] = useState({
    levels: [],
    cities: [],
    classFormats: [],
    minPrice: 0,
    maxPrice: 20000,
  });
  return (
    <div>
      {<Header />}
      {<FilterTutor filters={filters} setFilters={setFilters} />}
      {<TutorList filters={filters} />}
    </div>
  );
};

export default HomePage;
