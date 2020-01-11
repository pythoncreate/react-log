import React from "react";

const Filter = props => {
  return (
    <div className="container mb-3">
      <input
        onChange={props.handleChange}
        value={props.value}
        placeholder="filter messages.."
      />
    </div>
  );
};

export default Filter;
