import { ArrowUpRight, Flame } from "lucide-react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

const featuredDrops = [
  {
    id: "01",
    title: "Gear Five: Dawn Breaker",
    anime: "One Piece",
    mood: "New drop",
    quote: "Luffy bends lightning above the Flower Capital—captured in volumetric neon.",
    tags: ["4K HDR", "Dynamic", "OLED safe"],
    image: img1,
    gradient: "from-orange-500/70 via-rose-500/70 to-purple-600/70",
  },
  {
    id: "02",
    title: "Katana Devil Bloom",
    anime: "Chainsaw Man",
    mood: "Fan favorite",
    quote: "Denji vs. Reze frozen mid-spark with painterly chromatic aberration.",
    tags: ["Featured", "Noise-free"],
    image: img2,
    gradient: "from-sky-500/70 via-violet-600/70 to-fuchsia-600/70",
  },
  {
    id: "03",
    title: "Breath of the Sun",
    anime: "Demon Slayer",
    mood: "Staff pick",
    quote: "Tanjiro's Hinokami Kagura rendered with soft bloom for desktop setups.",
    tags: ["Ultra wide", "Grain-lite"],
    image: img3,
    gradient: "from-amber-400/70 via-red-500/70 to-indigo-600/70",
  },
];

const RightCard = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-6 lg:flex-row">
      {featuredDrops.map((card) => (
        <article
          key={card.id}
          className="group relative h-[520px] flex-1 overflow-hidden rounded-[32px] border border-white/10"
        >
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient}`} aria-hidden />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" aria-hidden />

          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between text-white/80">
              <span className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                {card.mood}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                {card.id}
              </span>
            </div>

            <div className="space-y-4 text-white">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">{card.anime}</p>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>

              <p className="text-sm text-white/80">{card.quote}</p>

              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/30">
                  <Flame size={16} />
                  Satisfy
                </button>
                <button className="rounded-2xl border border-white/40 p-3 text-white transition hover:-translate-y-1 hover:translate-x-1 hover:border-white">
                  <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default RightCard;
