import React from 'react';
import styles from './button.module.scss';

function Button({ label, onClick }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
