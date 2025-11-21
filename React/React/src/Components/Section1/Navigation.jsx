import { ListFilter, Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked! Current theme:', theme);
    console.log('Calling toggleTheme...');
    toggleTheme();
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-gradient-to-b from-slate-300 via-slate-300/90 to-transparent dark:from-night dark:via-night/90 dark:to-transparent pb-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border border-slate-400/60 dark:border-white/10 bg-slate-300/90 dark:bg-slate-900/70 px-6 py-4 backdrop-blur-xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-pink/70 via-neon-purple/80 to-neon-cyan/70 shadow-glow">
            <Sparkles className="text-white" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-600 dark:text-white/60">
              ZYNO STUDIO
            </p>
            <h4 className="font-display text-xl font-semibold text-slate-800 dark:text-white">
              Celestial Anime Vault
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleThemeToggle}
            className="flex items-center justify-center h-10 w-10 rounded-2xl border border-slate-400/60 dark:border-neon-purple/40 bg-gradient-to-r from-slate-400/60 via-slate-300/60 to-slate-400/60 dark:from-neon-purple/30 dark:via-neon-pink/30 dark:to-neon-cyan/30 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-white transition hover:-translate-y-0.5 hover:shadow-glow cursor-pointer"
            aria-label={`Toggle theme (current: ${theme})`}
            type="button"
            title={`Current theme: ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'}.`}
          >
            {theme === 'dark' ? <Sun size={18} className="text-slate-700 dark:text-white" /> : <Moon size={18} className="text-slate-700 dark:text-white" />}
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-400/60 dark:border-neon-purple/40 bg-gradient-to-r from-slate-400/60 via-slate-300/60 to-slate-400/60 dark:from-neon-purple/30 dark:via-neon-pink/30 dark:to-neon-cyan/30 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-white transition hover:-translate-y-0.5 hover:shadow-glow">
            <ListFilter size={16} />
            Categories
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;