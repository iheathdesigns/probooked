import React from 'react';

const Select = ({name, values, currentValue, onChange}) => (
    <select name={name} value={currentValue} onChange={onChange}>
      {values.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );

export default Select;