import React from 'react'
import WallpaperList from "../Section2/WallpaperList";

const Anime = () => {
  return (
     <div className="w-full min-h-screen bg-gradient-to-b from-gray-400 via-zinc-200 to-slate-300">
      <h1 className="text-4xl font-bold text-center pt-10">Anime Wallpapers</h1>
      <WallpaperList category="Anime" />
    </div>
  )
}

export default Anime