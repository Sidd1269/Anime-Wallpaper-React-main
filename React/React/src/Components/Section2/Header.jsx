import React from "react";
import { Link } from "react-router-dom";
import wallpapers from "../../Data/Wallpaper.json";

const Header = () => {
  // Generate unique categories
  const categories = [...new Set(wallpapers.map(w => w.category))];

  return (
    <div className=" py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
          Browse by Category
        </h2>

      <div className="flex flex-wrap gap-4 justify-center">

        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/category/${cat}`}
            className="bg-gray-600 px-5 py-2 rounded-3xl cursor-pointer hover:bg-gray-400 hover:text-red-600 transition"
          >
            {cat.replace(/-/g, " ")}
          </Link>
        ))}

      </div>

    </div>
    </div>
  );
};

export default Header;
