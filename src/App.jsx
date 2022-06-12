import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import Nav from "./components/nav";
import About from "./pages/about/about";
import Game from "./pages/game/game";
import Home from "./pages/home/home";

export default function App() {
  return (
    <div className="w-screen h-screen ">
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}
