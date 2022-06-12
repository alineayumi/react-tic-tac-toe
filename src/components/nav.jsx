import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="border-b-2 border-black pb-2 inline-flex justify-center w-full">
      <nav className="mx-auto flex flex-row items-center space-x-4">
        <Link className="text-2xl text-white" to="/game">
          Play
        </Link>
      </nav>
    </div>
  );
}
