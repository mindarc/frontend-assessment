import React from 'react';
import ShowTabs from "../components/Tabs";
import ShowAccordions from '../components/Accordions';
import data from'../assets/data.json';


const ExerciseTwo = () => {
  return (
    <div className="exercise__two">
      <div className="exercise__two--tabs"><ShowTabs data={data} /></div>
      <div className="exercise__two--accordion"><ShowAccordions data={data} /></div>
    </div>
  );
}

export default ExerciseTwo;

