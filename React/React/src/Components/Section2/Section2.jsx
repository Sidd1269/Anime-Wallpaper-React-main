import React from 'react'
import Header from './Header'
import ImageCard from './ImageCard'
import WallpaperList from './WallpaperList'
import Section3 from '../Section3/Section3'
import Footer from '../Section3/Footer'

const Section2 = () => {
  return (
    <div className="min-h-full w-full bg-gradient-to-b from-gray-400 via-zinc-200 to-slate-300">

    <Header />
    <ImageCard />
    <WallpaperList />

   
    <Section3 />
    </div>
  )
}

export default Section2