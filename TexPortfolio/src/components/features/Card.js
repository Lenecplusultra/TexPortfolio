import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="relative w-full px-8 py-8 rounded-xl overflow-hidden flex flex-col gap-6 cursor-default group transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #13151a 0%, #1a1d24 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '10px 10px 19px #0c0e11, -10px -10px 19px #181b20',
      }}
    >
      {/* Hover glow top-left */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-designColor opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Top border accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-designColor to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <span className="text-4xl text-designColor w-12 h-12 flex items-center justify-center rounded-lg bg-designColor/10 border border-designColor/20">
        {icon}
      </span>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-titleFont font-bold text-white group-hover:text-designColor transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed">{des}</p>
      </div>

      {/* Arrow */}
      <span className="text-designColor opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 mt-auto">
        <HiArrowRight size={18} />
      </span>
    </div>
  );
};

export default Card;
