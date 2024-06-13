import React, { useState } from 'react';
import './CheckBoxStyle.css';

const CheckBoxStyle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id="styled-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor="styled-checkbox"
        className={isChecked ? 'checked' : 'unchecked'}
      >
        Check me!
      </label>
    </div>
  );
};

export default CheckBoxStyle;
