import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Soccer"]);

  // const handleAdd = (newCat = "Car") => {
  //   setcategories((cats) => [newCat, ...categories]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        <ul>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ul>
      </ol>
    </>
  );
};

export default GifExpertApp;
