import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import { ArrowUpRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="flex gap-6 w-full h-[500px] overflow-y-hidden">

      {/* CARD 1 */}
      <div className="relative w-70 h-full rounded-4xl overflow-hidden">
        <img 
          src={img1} 
          className="w-full h-full object-cover"
          alt="img"
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <h2 className="absolute top-4 left-4 w-10 h-10 bg-white/80 text-black rounded-full flex items-center justify-center text-lg font-semibold ">1</h2>

          <div>
            <p className="text-white mb-6 mt-60 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur reprehenderit laboriosam eaque a quam.
            </p>

            <div className="flex gap-3">
              <button className="bg-white px-4 py-2 rounded-xl text-black">Satisfied</button>
              <button className="bg-black text-white p-3 rounded-xl">
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative w-70 h-full rounded-4xl overflow-hidden">
        <img 
          src={img2} 
          className="w-full h-full object-cover"
          alt="img"
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <h2 className="absolute top-4 left-4 w-10 h-10 bg-white/80 text-black rounded-full flex items-center justify-center text-lg font-semibold">2</h2>

          <div>
            <p className="text-white mb-6 mt-60">
              Necessitatibus perspiciatis velit laudantium vel impedit 
              blanditiis ad deserunt odit ipsa fugiat.
            </p>

            <div className="flex gap-3 mt-5">
              <button className="bg-white px-4 py-2 rounded-xl text-black">Satisfied</button>
              <button className="bg-black text-white p-3 rounded-xl">
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative w-70 h-full rounded-4xl overflow-hidden">
        <img 
          src={img3} 
          className="w-full h-full object-cover border-dotted" 
          alt="img"
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <h2 className="absolute top-4 left-4 w-10 h-10 bg-white/80 text-black rounded-full flex items-center justify-center text-lg font-semibold">3</h2>

          <div>
            <p className="text-blue-100 mb-6 mt-60">
              Architecto amet ratione quidem omnis nulla cumque alias! 
              Quasi perferendis esse optio.
            </p>

            <div className="flex gap-3">
              <button className="bg-white px-4 py-2 rounded-xl text-black">Satisfied</button>
              <button className="bg-black text-white p-3 rounded-xl">
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RightCard;
