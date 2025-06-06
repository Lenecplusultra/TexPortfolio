import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold">Core Tools</h2>
        </div>
        <div className="flex flex-col gap-6">
          {['Python', 'JavaScript', 'Java', 'C', 'LangChain', 'SQL', 'React', 'Node.js', 'Git', 'AWS', 'Firebase', 'Selenium'].map((tech, index) => (
            <div className="overflow-x-hidden" key={index}>
              <p className="text-sm uppercase font-medium">{tech}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;