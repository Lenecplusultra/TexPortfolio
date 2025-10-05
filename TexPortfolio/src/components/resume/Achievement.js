import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025</p>
          <h2 className="text-4xl font-bold">Leadership & Development</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Adobe Student Ambassador"
            subTitle="Kennesaw State University (Aug 2025 – Present)"
            result="USA"
            des="Represented Adobe on campus, produced tutorials, and connected students with Adobe creative resources"
          />
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Member - ColorStack"
            subTitle="Kennesaw State University (Jan 2025 – Present)"
            result="USA"
            des="Collaborated in peer-led tech circles focused on equity and excellence in computer science."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;