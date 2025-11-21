import { useNavigate } from "react-router-dom";

const WallpaperCard = ({ id, title, desc, image }) => {
  const navigate = useNavigate();

  return (
    <article
      className="group w-full max-w-[320px] cursor-pointer overflow-hidden rounded-[28px] border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-4 text-gray-900 dark:text-white transition hover:-translate-y-1 hover:border-gray-400/60 dark:hover:border-neon-cyan/60 hover:shadow-glow"
      onClick={() => navigate(`/wallpaper/${id}`)}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-white/70 line-clamp-2">{desc}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/wallpaper/${id}`);
        }}
        className="mt-4 w-full rounded-2xl border border-gray-400/50 dark:border-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-gray-800 dark:text-white transition hover:border-gray-500/60 dark:hover:border-neon-pink/60"
      >
        View
      </button>
    </article>
  );
};

export default WallpaperCard;
