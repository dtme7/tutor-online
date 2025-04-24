import React from "react";
import TutorList from "../components/TutorList";
import FilterTutor from "../components/FilterTutor";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      {<Header />}
      {<FilterTutor />}
      {<TutorList />}
    </div>
  );
};

export default HomePage;
