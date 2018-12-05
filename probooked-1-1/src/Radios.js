import React from 'react';

const Radios = ({name, values, currentValue, onChange}) => (
    <fieldset>
      {values.map(value => (
        <label key={value}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={value === currentValue}
            onChange={onChange}
          />
          {value}
        </label>
      ))}
    </fieldset>
  );

export default Radios;