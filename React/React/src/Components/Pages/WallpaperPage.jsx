import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import Navigation from "../Section1/Navigation";
import wallpapers from "../../Data/Wallpaper.json";
import Footer from "../Section3/Footer";

const WallpaperPage = () => {
  const { id } = useParams();
  const item = wallpapers.find(w => w.id == id);

  if (!item) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 dark:from-night dark:via-night-2 dark:to-black">
        <Navigation />
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Wallpaper Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 dark:from-night dark:via-night-2 dark:to-black">
      <div className="absolute inset-0 bg-anime-grid-light dark:bg-anime-grid opacity-20 dark:opacity-40" aria-hidden />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="mx-auto max-w-5xl px-6 py-12">
          <Link 
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white transition hover:border-gray-400/60 dark:hover:border-neon-cyan/60 hover:bg-gray-200/50 dark:hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
              {item.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Image preview */}
          <div className="mb-10 rounded-2xl overflow-hidden border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-4 backdrop-blur-sm">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Download buttons */}
          <div className="mb-10 flex flex-wrap gap-4 justify-center">
            <a
              href={item.image}
              download
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-pink/80 to-neon-purple/80 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-glow"
            >
              <Download size={18} />
              Download in HD
            </a>

            <a
              href={item.image}
              className="flex items-center gap-2 rounded-xl border border-gray-400/50 dark:border-neon-cyan/50 bg-gray-100/50 dark:bg-white/5 px-6 py-3 font-semibold text-gray-800 dark:text-white transition hover:border-gray-500/60 dark:hover:border-neon-cyan/80 hover:bg-gray-200/50 dark:hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Open Original
            </a>
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-white/80">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="rounded-lg border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 text-sm text-gray-700 dark:text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default WallpaperPage;
