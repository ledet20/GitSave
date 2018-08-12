import React from "react";

export const DisplayUser = props => (
    <div>
      <h1>{props.name}</h1>
      <p> {props.description} </p>
    </div>
  );
