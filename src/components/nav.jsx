import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="">
      <nav className="">
        <Link className="" to="/game">
          Play
        </Link>
      </nav>
    </div>
  );
}
