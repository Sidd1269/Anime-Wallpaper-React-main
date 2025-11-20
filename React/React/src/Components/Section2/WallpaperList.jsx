import { useState } from "react";
import wallpapers from "../../Data/Wallpaper.json";
import WallpaperCard from "./WallpaperCard";

const WallpaperList = ({ category }) => {
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

  // Filter wallpapers by category
  const filtered =
    category
      ? wallpapers.filter((w) => normalize(w.category) === normalize(category))
      : wallpapers;

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedWallpapers = filtered.slice(start, start + pageSize);

  return (
    <div className="w-full">

      {/* Wallpaper Grid */}
      <div className="w-full flex flex-wrap gap-6 justify-center mt-10">
        {paginatedWallpapers.map((item) => (
          <WallpaperCard
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-10">

        {/* Prev Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg 
          ${page === 1 ? "bg-gray-400 text-gray-700" : "bg-black text-white hover:bg-gray-800"}
        `}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 rounded-lg ${
              page === i + 1
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg 
          ${page === totalPages ? "bg-gray-400 text-gray-700" : "bg-black text-white hover:bg-gray-800"}
        `}
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default WallpaperList;
