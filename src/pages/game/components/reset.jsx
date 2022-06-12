import React from "react";

export default function Reset(props) {
    return (
      <button className="reset hover:bg-black bg-black" onClick={props.onClick}>
        RESET GAME
      </button>
    );
  }