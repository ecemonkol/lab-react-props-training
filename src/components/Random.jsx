import React from "react";

function Random({ min, max }) {
  return (
    <div>
      Random value between {min} and {max} = {Math.floor(Math.random() * max)}
    </div>
  );
}

export default Random;
