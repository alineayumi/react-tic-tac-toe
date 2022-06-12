import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import tictactoe from "../../src/assets/tic-tac-toe.png";

export default function Nav() {
  const unselectedNavLinkStyle =
    "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent text-white md:p-0";
  const selectedNavLinkStyle =
    "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent text-secondary md:p-0";
  const unselectedDropdown = "text-white";
  const selectedDropdown = "text-secondary";
  const [showMenu, setMenu] = useState(false);
  const dropdownRef = useRef(null);

  // logic for dropdown menu (close the dropdown when user clicks outside of it)
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenu(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(dropdownRef);

  return (
    <nav className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 rounded bg-primary h-[60px] mx-[20px] mt-[20px]">
      <NavLink to="/" className="flex items-center">
        <img
          src={tictactoe}
          className="mr-3 h-6 sm:h-9"
          alt="Tic Tac Toe Logo"
        />
      </NavLink>
      <button
        onClick={() => setMenu(!showMenu)}
        class="md:hidden text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        ref={dropdownRef}
        class={`absolute z-10 right-[20px] top-[85px] ${
          showMenu ? "block" : "hidden"
        } rounded shadow w-44 bg-primary`}
      >
        <ul className="flex flex-col items-start my-4 space-y-4">
          <li>
            <NavLink
              to=""
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                isActive ? selectedDropdown : unselectedDropdown
              }
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                isActive ? selectedDropdown : unselectedDropdown
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="game"
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                isActive ? selectedDropdown : unselectedDropdown
              }
            >
              Play
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="game"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              Play
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/*
<button
data-collapse-toggle="mobile-menu"
type="button"
className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
aria-controls="mobile-menu"
aria-expanded="false"
>
<span className="sr-only">Open main menu</span>
<svg
  className="w-6 h-6"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    clipRule="evenodd"
  ></path>
</svg>
<svg
  className="hidden w-6 h-6"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    clipRule="evenodd"
  ></path>
</svg>
</button>
*/
