import React from "react";

const ImageCard = () => {
  return (
    <div className="relative mx-auto mt-4 max-w-5xl overflow-hidden rounded-[36px] border border-gray-300/50 dark:border-white/10 bg-gradient-to-r from-slate-200/80 via-slate-100/90 to-slate-200/80 dark:from-slate-900/70 dark:via-night-2/80 dark:to-slate-900/70 p-10 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.3),transparent_55%)]" aria-hidden />
      <div className="relative z-10 flex flex-col gap-6">
        <p className="text-xs uppercase tracking-[0.45em] text-gray-600 dark:text-white/60">Weekly spotlight</p>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
          Anime wallpaper drops curated for{" "}
          <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            midnight desktops
          </span>
          .
        </h1>
        <p className="text-base text-gray-700 dark:text-slate-300">
          Monkey D. Luffy, Chainsaw Man, Tanjiro, Zenitsu, Makima, and Gojo—all color-graded for
          dark setups with cinematic contrast, perfect for OLED phones, ultrawide monitors, and
          vertical signage.
        </p>

        <div className="flex flex-wrap gap-4">
          {["4K ready", "Dual monitor", "Phone crops", "AI upscaled"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-700 dark:text-white/80"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
