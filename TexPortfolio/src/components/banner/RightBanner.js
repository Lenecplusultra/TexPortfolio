import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-end relative mt-10 lgl:mt-0">

      {/* Background panel */}
      <div
        className="absolute bottom-0 w-[300px] h-[400px] lgl:w-[400px] lgl:h-[500px] rounded-2xl z-0"
        style={{
          background: 'linear-gradient(145deg, #1a1d24, #0e1014)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 0 80px rgba(255,1,79,0.07), 10px 10px 19px #0c0e11, -10px -10px 19px #181b20',
        }}
      />

      {/* Corner bracket accents */}
      <div className="absolute bottom-0 w-[300px] lgl:w-[400px] h-[400px] lgl:h-[500px] rounded-2xl z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-designColor/60 rounded-bl-lg" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-designColor/25 rounded-tr-lg" />
      </div>

      {/* Profile image */}
      <img
        className="w-[280px] h-[380px] lgl:w-[380px] lgl:h-[480px] object-cover rounded-2xl z-10 relative"
        style={{ filter: 'contrast(1.02) brightness(0.98)' }}
        src={bannerImg}
        alt="Tex Yonzo"
      />

      {/* "Open to work" badge — bottom-right of image, not overlapping face */}
      <div
        className="absolute bottom-6 right-[calc(50%-165px)] lgl:right-[calc(50%-215px)] z-20 flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: 'rgba(10,12,16,0.92)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span className="text-xs font-mono text-gray-300 tracking-wide">Open to work</span>
      </div>
    </div>
  );
};

export default RightBanner;
