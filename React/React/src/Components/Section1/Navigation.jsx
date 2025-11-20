import React from 'react'

const Navigation = () => {
  return (
    <div className="flex items-center justify-between py-5 px-18 bg-gray-100">
        <h4 className='bg-black text-white text-xl uppercase px-6 py-2 rounded-full'
        >ZYNO Wallpapers</h4>
        <button className='bg-gray-100 px-6 py-2 tracking-wider text-xs
        uppercase rounded-2xl '>Categories</button>
    </div>
  )
}

export default Navigation