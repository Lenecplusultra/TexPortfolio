import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex pl-6 relative">
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-designColor/40 bg-bodyColor group-hover:border-designColor group-hover:bg-designColor/20 transition-all duration-300 z-10" />

      {/* Card */}
      <div
        className="w-full rounded-xl p-5 lgl:p-7 flex flex-col gap-4 transition-all duration-300 group-hover:border-white/10"
        style={{
          background: 'linear-gradient(145deg, #13151a, #181b22)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Top row */}
        <div className="flex flex-col lgl:flex-row justify-between gap-3 lgl:items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm font-mono text-gray-500 group-hover:text-gray-400 duration-300">
              {subTitle}
            </p>
          </div>
          <span
            className="self-start px-3 py-1 text-xs font-mono rounded-full whitespace-nowrap flex-shrink-0"
            style={{
              color: '#ff014f',
              backgroundColor: 'rgba(255,1,79,0.08)',
              border: '1px solid rgba(255,1,79,0.2)',
            }}
          >
            {result}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
