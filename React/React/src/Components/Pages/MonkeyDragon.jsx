import React from 'react'
import WallpaperList from "../Section2/WallpaperList";
import Footer from '../Section3/Footer'

const MonkeyDragon = () => {
  return (
      <div className="w-full min-h-screen bg-linear-to-b from-gray-400 via-zinc-200 to-slate-300">
      <h1 className="text-4xl font-bold text-center pt-10">Chainsaw Man</h1>
      <WallpaperList category="OnePiece" />
      <Footer />
    </div>
  )
}

export default MonkeyDragon