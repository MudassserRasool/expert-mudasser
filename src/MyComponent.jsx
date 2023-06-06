import React from 'react';

const MyComponent = () => {
  const placeholderHTML = `Enter ${<span>text</span>} here`;

  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholderHTML}
    />
  );
};

export default MyComponent;
