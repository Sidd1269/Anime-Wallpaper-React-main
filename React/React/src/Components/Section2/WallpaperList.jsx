import { useState, useEffect, useRef } from "react";
import wallpapers from "../../Data/Wallpaper.json";
import WallpaperCard from "./WallpaperCard";

const WallpaperList = ({ category }) => {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const wallpaperGridRef = useRef(null);

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

  // Filter wallpapers by category
  const filtered =
    category
      ? wallpapers.filter((w) => normalize(w.category) === normalize(category))
      : wallpapers;

  const totalPages = Math.ceil(filtered.length / pageSize);

  const start = (page - 1) * pageSize;
  const paginatedWallpapers = filtered.slice(start, start + pageSize);

  // Scroll to wallpaper grid on page change
  useEffect(() => {
    if (wallpaperGridRef.current) {
      wallpaperGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  return (
    <div className="w-full px-4 sm:px-8" ref={wallpaperGridRef}>

      {/* Wallpaper GRID */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-6">
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
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-gray-900 dark:text-white">

        {/* FIRST Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(1)}
          className={`rounded-2xl px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ${
            page === 1
              ? "border border-gray-300/50 dark:border-white/10 bg-gray-200/50 dark:bg-white/5 text-gray-400 dark:text-white/40"
              : "border border-gray-400/50 dark:border-white/20 bg-gray-100/50 dark:bg-white/10 text-gray-800 dark:text-white transition hover:border-gray-500/60 dark:hover:border-neon-cyan/60"
          }`}
        >
          First
        </button>

        {/* Prev Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`rounded-2xl px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ${
            page === 1
              ? "border border-gray-300/50 dark:border-white/10 bg-gray-200/50 dark:bg-white/5 text-gray-400 dark:text-white/40"
              : "border border-gray-400/50 dark:border-white/20 bg-gray-100/50 dark:bg-white/10 text-gray-800 dark:text-white transition hover:border-gray-500/60 dark:hover:border-neon-cyan/60"
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
                className={`rounded-2xl px-3 py-2 text-sm font-semibold ${
                  page === p
                    ? "border border-neon-pink/70 bg-neon-pink/30 text-white shadow-glow"
                    : "border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 text-gray-700 dark:text-white/70 hover:border-gray-400/60 dark:hover:border-neon-cyan/60"
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
          className={`rounded-2xl px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ${
            page === totalPages
              ? "border border-gray-300/50 dark:border-white/10 bg-gray-200/50 dark:bg-white/5 text-gray-400 dark:text-white/40"
              : "border border-gray-400/50 dark:border-white/20 bg-gray-100/50 dark:bg-white/10 text-gray-800 dark:text-white transition hover:border-gray-500/60 dark:hover:border-neon-cyan/60"
          }`}
        >
          Next
        </button>

        {/* LAST Button */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
          className={`rounded-2xl px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ${
            page === totalPages
              ? "border border-gray-300/50 dark:border-white/10 bg-gray-200/50 dark:bg-white/5 text-gray-400 dark:text-white/40"
              : "border border-gray-400/50 dark:border-white/20 bg-gray-100/50 dark:bg-white/10 text-gray-800 dark:text-white transition hover:border-gray-500/60 dark:hover:border-neon-cyan/60"
          }`}
        >
          Last
        </button>

      </div>
    </div>
  );
};

export default WallpaperList;
