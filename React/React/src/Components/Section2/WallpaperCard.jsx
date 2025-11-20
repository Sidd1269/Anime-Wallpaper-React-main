import { useNavigate } from "react-router-dom";

const WallpaperCard = ({ id, title, desc, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-400 rounded-xl shadow-md w-full sm:w-[300px] hover:shadow-lg transition p-4 cursor-pointer"
      onClick={() => navigate(`/wallpaper/${id}`)}
    >
      <img 
        src={image} 
        alt={title} 
        className="h-48 w-full object-cover rounded-lg transform transition duration-300 hover:scale-105 hover:-translate-y-1"
      />

     <h3 className="text-xl font-semibold mt-3 truncate w-full">
  {title}
    </h3>
    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
  {desc}
    </p>


      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          navigate(`/wallpaper/${id}`)
        }} 
        className="mt-3 px-30 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        View
      </button>
    </div>
  );
};

export default WallpaperCard;
