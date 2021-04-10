//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

const myName = "Mickey Holmes";

const CURRENTYEAR = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright &copy;{CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
