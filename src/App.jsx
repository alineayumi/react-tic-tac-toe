import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import Nav from "./components/nav";
import Game from "./pages/game/game";

export default function App() {
  return (
    <div className="w-screen h-screen ">
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}
