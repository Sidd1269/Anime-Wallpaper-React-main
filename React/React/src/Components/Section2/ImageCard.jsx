import React from 'react';

const ImageCard = () => {
  return (
<div className="mx-20 mt-3 mb-10 relative rounded-3xl overflow-hidden bg-gray-400 shadow-md">

  {/* TEXT */}
  <div className="relative z-20 px-10 pb-8 mt-4">
    <h1 className="text-4xl font-semibold text-gray-800">
      Anime Wallpaper ..........
    </h1>

    <p className="text-gray-700 mt-2">
      Explore recently added wallpapers of Monkey D. Luffy, Chainsaw Man, Tanjiro Kamado,
      Zenitsu Agatsuma, Tojima Wants to Be a Kamen Rider, Reze vs Denji from Anime category.
    </p>
  </div>

  {/* ANIMATED WAVE */}
  <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-10">
    <svg
      className="w-[200%] h-full animate-wave"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#e5e7eb"
        d="M0,192L30,176C60,160,120,128,180,106.7C240,85,300,75,360,86.7C420,96,480,128,540,122.7C600,117,660,75,720,53.3C780,32,840,32,900,53.3C960,75,1020,117,1080,122.7C1140,128,1200,96,1260,85.3C1320,75,1380,85,1410,90.7L1440,96V320H0Z"
      ></path>
    </svg>
  </div>

  {/* KEYFRAMES */}
  <style>
    {`
      @keyframes waveMove {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-wave {
        animation: waveMove 6s linear infinite;
      }
    `}
  </style>
</div>
  );
};

export default ImageCard;
