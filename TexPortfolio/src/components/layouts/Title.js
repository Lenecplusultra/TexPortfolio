import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-3 font-titleFont mb-14">
      {/* Eyebrow: dot + label */}
      <div className="flex items-center gap-2">
        <span className="w-5 h-px bg-designColor inline-block" />
        <h3 className="text-xs uppercase font-mono font-medium text-designColor tracking-[4px]">
          {title}
        </h3>
        <span className="w-5 h-px bg-designColor inline-block" />
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-white font-bold capitalize leading-tight">
        {des}
      </h1>
    </div>
  );
};

export default Title;
