import React from "react";
import { Link } from "react-router-dom";
import wallpapers from "../../Data/Wallpaper.json";

const Header = () => {
  const categories = [...new Set(wallpapers.map((w) => w.category))];

  return (
    <div className="mx-auto max-w-6xl px-6 text-center">
      <p className="text-xs uppercase tracking-[0.5em] text-slate-600 dark:text-white/60">Explore universes</p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-800 dark:text-white sm:text-4xl">
        Browse by <span className="text-neon-pink">Category</span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className="rounded-full border border-slate-400/60 bg-slate-300/70 dark:border-white/10 dark:bg-white/5 px-5 py-2 text-sm font-semibold text-slate-700 dark:text-white transition hover:border-slate-500/70 dark:hover:border-neon-cyan/60 hover:bg-slate-400/80 dark:hover:bg-white/15"
          >
            {cat.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
