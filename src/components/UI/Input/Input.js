import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ label, inputAttr }, ref) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input ref={ref} {...inputAttr} />
    </div>
  );
});

export default Input;
