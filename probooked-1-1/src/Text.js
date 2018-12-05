import React from 'react';

const Text = ({label, name, value, placeholder, feedback, onChange}) => (
    <div>
      <label>
        {`${label}:`}
        <input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
      </label>
      <span>
      {feedback}
      </span>
    </div>
  );

export default Text;