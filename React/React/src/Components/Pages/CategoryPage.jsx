import { useParams } from "react-router-dom";
import WallpaperList from "../Section2/WallpaperList";

const CategoryPage = () => {
  const { name } = useParams();   // anime, one-piece, chainsaw-man, etc.

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-gray-400 via-zinc-200 to-slate-300">
      <h1 className="text-4xl font-bold text-center pt-10 capitalize">
        {name} Wallpapers
      </h1>

      <WallpaperList category={name} />
    </div>
  );
};

export default CategoryPage;
