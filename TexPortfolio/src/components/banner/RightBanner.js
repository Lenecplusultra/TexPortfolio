import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-end relative">

      {/* Outer glow ring */}
      <div className="absolute bottom-0 w-[310px] h-[410px] lgl:w-[410px] lgl:h-[510px] rounded-xl z-0"
        style={{
          background: 'linear-gradient(145deg, #1a1d24, #0e1014)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 0 60px rgba(255,1,79,0.08), 10px 10px 19px #0c0e11, -10px -10px 19px #181b20',
        }}
      />

      {/* Red corner accent */}
      <div className="absolute bottom-0 right-[calc(50%-155px)] lgl:right-[calc(50%-205px)] w-[310px] lgl:w-[410px] h-[410px] lgl:h-[510px] rounded-xl z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-designColor rounded-bl-xl opacity-60" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-designColor/30 rounded-tr-xl" />
      </div>

      {/* Profile image */}
      <img
        className="w-[290px] h-[390px] lgl:w-[390px] lgl:h-[490px] object-cover rounded-xl z-10"
        style={{ filter: 'contrast(1.02) brightness(0.97)' }}
        src={bannerImg}
        alt="Tex Yonzo"
      />

      {/* Floating status badge */}
      <div className="absolute top-6 right-4 lgl:right-0 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: 'rgba(14,16,20,0.9)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-mono text-gray-300 tracking-wide">Open to work</span>
      </div>
    </div>
  );
};

export default RightBanner;
