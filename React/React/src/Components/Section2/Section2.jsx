import React from "react";
import Navigation from "../Section1/Navigation";
import Header from "./Header";
import ImageCard from "./ImageCard";
import WallpaperList from "./WallpaperList";
import Section3 from "../Section3/Section3";

const Section2 = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 dark:bg-gradient-to-b dark:from-night dark:via-night-2 dark:to-black py-16 transition-colors duration-300">
      <div className="absolute inset-0 bg-anime-grid-light dark:bg-anime-grid opacity-20 dark:opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-500/30 dark:bg-neon-purple/20 blur-3xl" aria-hidden />

      <div className="relative z-10 space-y-14">
        <Navigation />
        <Header />
        <ImageCard />
        <WallpaperList />
        <Section3 />
      </div>
    </section>
  );
};

export default Section2;
