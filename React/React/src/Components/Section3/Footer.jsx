const Footer = () => {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl rounded-[36px] border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-8 text-gray-900 dark:text-white shadow-glow backdrop-blur">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">AnimeWall</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
            High-fidelity wallpapers from your favorite anime multiverses. Optimized for phones,
            tablets, ultrawide, and vertical monitors.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-white/70">
            {["Home", "Categories", "Wallpapers", "About"].map((link) => (
              <li key={link} className="cursor-pointer transition hover:text-gray-900 dark:hover:text-white">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
          <div className="mt-4 flex items-center gap-4 text-xl">
            {["🐦", "📷", "▶️"].map((icon, index) => (
              <a
                key={icon}
                href="#"
                aria-label={`social-${index}`}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-300/50 dark:border-white/10 bg-gray-200/50 dark:bg-white/10 transition hover:border-gray-400/60 dark:hover:border-neon-cyan/70"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300/50 dark:border-white/10 pt-5 text-center text-sm text-gray-500 dark:text-white/50">
        © {new Date().getFullYear()} AnimeWall. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
