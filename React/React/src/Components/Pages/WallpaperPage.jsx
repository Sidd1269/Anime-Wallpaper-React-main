import { useParams } from "react-router-dom";
import wallpapers from "../../Data/Wallpaper.json";

const WallpaperPage = () => {
  

  const { id } = useParams();
  const item = wallpapers.find(w => w.id == id);

  if (!item) return <h1 className="text-center text-3xl mt-20">Wallpaper Not Found</h1>

  return (
    <div className="min-h-screen w-full bg-[#1e1e24] text-white px-5 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold">
        {item.title}
      </h1>
      <p className="text-gray-300 mt-2 max-w-2xl">
        {item.desc}
      </p>

      {/* Image preview */}
      <div className="flex justify-center mt-10">
        <img 
          src={item.image} 
          alt={item.title}
          className="rounded-xl shadow-2xl w-full max-w-4xl"
        />
      </div>

      {/* Download buttons */}
      <div className="flex gap-5 justify-center mt-10">
        <a
          href={item.image}
          download
          className="px-5 py-3 bg-green-600 rounded-lg hover:bg-green-700"
        >
          Download in HD
        </a>

        <a
          href={item.image}
          className="px-5 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
          target="_blank"
        >
          Open Original
        </a>
      </div>

      {/* Tags */}
      <div className="flex gap-3 mt-10 flex-wrap text-gray-300">
        {item.tags?.map((tag, i) => (
          <span 
            key={i}
            className="px-3 py-1 bg-gray-800 rounded-lg text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
};

export default WallpaperPage;
