const Footer = () => {
  return (
    <footer className="w-full  bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10">

        {/* Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-white">AnimeWall</h2>
          <p className="mt-3 text-sm text-gray-400">
            High-quality wallpapers from your favorite anime worlds.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Wallpapers</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📷</a>
            <a href="#" className="hover:text-white">▶️</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AnimeWall. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
