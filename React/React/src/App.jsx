import "./App.css";
import { Routes, Route } from "react-router-dom";

import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import WallpaperPage from "./Components/Pages/WallpaperPage";
import CategoryPage from "./Components/Pages/CategoryPage"; 

import Anime from "./Components/Pages/Anime";
import OnePiece from "./Components/Pages/OnePiece";
import DragonBall from "./Components/Pages/DragonBall";
import MonkeyDragon from "./Components/Pages/MonkeyDragon";
import ChainsawMan from "./Components/Pages/ChainsawMan";
import SpyXFamily from "./Components/Pages/JujutsuKaisen";
import DemonSlayer from "./Components/Pages/DemonSlayer";
import Bleach from "./Components/Pages/Bleach";
import MyHeroAce from "./Components/Pages/MyHeroAce";
import TokyoGhoul from "./Components/Pages/TokyoGhoul";


import ScrollToTop from "./Function/ScrollToTop";


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
            </>
          }
        />

        {/* DYNAMIC WALLPAPER PAGE */}
        <Route path="/wallpaper/:id" element={<WallpaperPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />


         {/* CATEGORY PAGES */}
      <Route path="/anime" element={<Anime />} />
      <Route path="/one-piece" element={<OnePiece />} />
      <Route path="/dragon-ball" element={<DragonBall />} />
      <Route path="/monkey-dragon" element={<MonkeyDragon />} />
      <Route path="/chainsaw-man" element={<ChainsawMan />} />
      <Route path="/spy-x-family" element={<SpyXFamily />} />
      <Route path="/Demon-Slayer" element={<DemonSlayer />} />
      <Route path="/Bleach" element={<Bleach />} />
      <Route path="/MyHeroAce" element={<MyHeroAce />} />
      <Route path="/TokyoGhoul" element={<TokyoGhoul />} />


      </Routes>
    </>
  );
}

export default App;
