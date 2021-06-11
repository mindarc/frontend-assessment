import React from 'react';
import styles from './ExerciseTwo.module.scss';
import Tabs from './tabs/Tabs';
import Accordion from './accordion/Accordion';
import DATA from '../../assets/data.json';

export default function ExerciseTwo() {
  return (
    <div className={styles.exerciseTwo}>
      <div className={styles.tabs}>
        <Tabs data={DATA} />
      </div>
      <div className={styles.accordion}>
        <Accordion data={DATA} />
      </div>
    </div>
  );
}
