import React from 'react';
import Tabs from "../components/Tabs";
import Accordions from '../components/Accordions';
const data = require('../assets/data/data.json')

const ExerciseTwo = () => {
  return (
    <div className="exercise__two">
      <div className="exercise__two--tabs"><Tabs data={data} /></div>
      <div className="exercise__two--accordion"><Accordions data={data} /></div>
    </div>
  );
}

export default ExerciseTwo;
