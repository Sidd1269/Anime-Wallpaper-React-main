import { ArrowUpRight, Sparkles } from "lucide-react";

const HeroText = () => {
  return (
    <div className="flex w-full flex-col gap-10 rounded-[32px] border border-white/10 bg-slate-900/40 p-8 shadow-glow backdrop-blur">
      <div className="space-y-4">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan/80">
          <Sparkles size={14} />
          curated anime vault
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Neo-Tokyo{" "}
          <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            light trails
          </span>{" "}
          in native 4K.
        </h1>
        <p className="text-base text-slate-300 sm:text-lg">
          Dive into cinematic frames of Luffy, Denji, Tanjiro, Gojo, and more—
          remastered with deep blacks, anime gradients, and stylized grain that
          make OLED screens glow.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button className="rounded-2xl bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-0.5">
          Download Collection
        </button>
        <button className="group flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-neon-cyan/70">
          Live preview
          <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
};

export default HeroText;
