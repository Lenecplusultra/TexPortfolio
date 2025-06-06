import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
        <h2 className="text-4xl font-bold">Internship Experience</h2>
      </div>
      <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Software Engineer Intern"
          subTitle="Intelligentsia SA, Yaounde (May 2023 – Aug 2023)"
          result="Cameroon"
          des="Led BPM platform dev w/ Bonita Studio for 20+ workflows; built secure APIs reducing manual work by 50% and improved response speed by 35% via QA."
        />
        <ResumeCard
          title="Software Engineer Intern"
          subTitle="Intelligentsia SA, Yaounde (May 2022 – Aug 2022)"
          result="Cameroon"
          des="Automated EHR testing using Selenium (90% bug reduction); enhanced DB speed 40% via SQL optimization; boosted test cycles w/ TestNG."
        />
      </div>
    </motion.div>
  );
};

export default Experience;