import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">New Gif</label>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
