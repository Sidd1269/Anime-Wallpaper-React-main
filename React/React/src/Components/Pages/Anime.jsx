import React from 'react'
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "../Section1/Navigation";
import WallpaperList from "../Section2/WallpaperList";
import Footer from '../Section3/Footer';

const Anime = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 dark:from-night dark:via-night-2 dark:to-black">
      <div className="absolute inset-0 bg-anime-grid-light dark:bg-anime-grid opacity-20 dark:opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-300/30 dark:bg-neon-purple/20 blur-3xl" aria-hidden />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link 
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-gray-300/50 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white transition hover:border-gray-400/60 dark:hover:border-neon-cyan/60 hover:bg-gray-200/50 dark:hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-600 dark:text-white/60">Category</p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              <span className="text-neon-pink">Anime</span> Wallpapers
            </h1>
          </div>

          <WallpaperList category="naruto" />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default Anime