import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Button style (clean & reusable)
  const btn =
    "bg-gray-600 px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-400 hover:text-red-600 transition";

  return (
    <div className="max-w-7xl mx-auto text-white uppercase px-10 py-10">

      {/* FIRST ROW */}
      <div className="flex items-center justify-center">
        <ul className="flex gap-4">

          <li className={btn} onClick={() => navigate("/anime")}>
            Anime
          </li>

          <li className={btn} onClick={() => navigate("/one-piece")}>
            OnePiece
          </li>

          <li className={btn} onClick={() => navigate("/dragon-ball")}>
            DragonBall
          </li>

          <li className={btn} onClick={() => navigate("/monkey-dragon")}>
            Monkey Dragon
          </li>

          <li className={btn} onClick={() => navigate("/chainsaw-man")}>
            Chainsaw Man
          </li>

          <li className={btn} onClick={() => navigate("/spy-x-family")}>
            Spy X Family
          </li>

          <li className={btn} onClick={() => navigate("/Demon-Slayer")} >
            Demon Slayer 
          </li>

          <li className={btn} onClick={() => navigate("/Bleach")}>
            Bleach
          </li>

          <li className={btn} onClick={() => navigate("/MyHeroAce")} >
            MHA
          </li>

        </ul>
      </div>

      {/* SECOND ROW */}
      <div className="flex items-center justify-center mt-7">
        <ul className="flex gap-4">

          <li className={btn} onClick={() => navigate("/monkey-dragon")}>
            Your Name
          </li>

          <li className={btn} onClick={() => navigate("/chainsaw-man")}>
            Hunter x Hunter
          </li>

          <li className={btn} onClick={() => navigate("/spy-x-family")}>
            Death Note
          </li>

          <li className={btn}>
            Attack on Titan
          </li>

          <li className={btn}>
            Spirited Away
          </li>

          <li className={btn}>
            Death Note 
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
