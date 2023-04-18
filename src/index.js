import React from "react";
import ReactDOM from "react-dom";

//como usar a variável(javascript) dentro do html
//const name = "cats";
const fName = "Angela";
const lName = "Yu";
const number = 13;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your luky number is {number}!</p>
  </div>,
  document.getElementById("root")
);
