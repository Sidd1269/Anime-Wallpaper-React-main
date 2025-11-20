import { useState, useEffect } from "react";
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

  const totalPages = Math.ceil(filtered.length / pageSize);

  const start = (page - 1) * pageSize;
  const paginatedWallpapers = filtered.slice(start, start + pageSize);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="w-full">

      {/* Wallpaper GRID */}
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

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-10 items-center">

        {/* FIRST Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(1)}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-300 text-gray-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          First
        </button>

        {/* Prev Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-300 text-gray-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Prev
        </button>

        {/* Page Buttons Window (max 5) */}
        {(() => {
          const windowSize = 5;

          let startPage = Math.max(1, page - Math.floor(windowSize / 2));
          let endPage = startPage + windowSize - 1;

          // keep window inside totalPages
          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - windowSize + 1);
          }

          const pages = [];
          for (let p = startPage; p <= endPage; p++) {
            pages.push(
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-2 rounded-lg ${
                  page === p
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                {p}
              </button>
            );
          }

          return pages;
        })()}

        {/* Next Button */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-300 text-gray-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Next
        </button>

        {/* LAST Button */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-300 text-gray-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Last
        </button>

      </div>
    </div>
  );
};

export default WallpaperList;
