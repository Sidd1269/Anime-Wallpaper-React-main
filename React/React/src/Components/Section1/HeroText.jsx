import { ArrowUpRight } from 'lucide-react'; 


const HeroText = () => {
  return (
    <div className='h-full flex flex-col w-full md:w-1/2 lg:w-1/3  p-6 md:p-10 justify-between'>

      {/* TEXT CONTENT */}
      <div className='pl-6'>
        <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
          Collection <br /> 
          <span className=' text-gray-500 rounded-3xl px-1 py-1 mt-2'>Of 4k</span> <br />
          Wallpapers
        </h3>

        <p className='text-base sm:text-lg md:text-xl text-gray-700'>
          Explore recently added wallpapers of Monkey D. Luffy,  Tojima Wants to Be a Kamen Rider, Reze vs Denji from Anime category.
        </p>
      </div>

      {/* ICON */}
      <div className='mt-20 md:mt-30'>
        <ArrowUpRight 
          size={50} 
          className='sm:size-[60px] md:size-[70px] lg:size-[90px]' 
          strokeWidth={2} 
        />
      </div>

    </div>
  )
}

export default HeroText