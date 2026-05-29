import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] font-mono">2025 — Present</p>
        <h2 className="text-3xl md:text-4xl font-bold">Leadership & Activities</h2>
      </div>

      <div className="w-full border-l-[3px] border-designColor/20 flex flex-col gap-8">
        <ResumeCard
          title="Project Manager"
          subTitle="Byte Club — Kennesaw State University (Jan 2023 – Aug 2024)"
          result="PKFokam Institute"
          des="Leading project planning, sprint coordination, and delivery for student engineering initiatives. Facilitating cross-functional collaboration between developers, designers, and stakeholders."
        />
        <ResumeCard
          title="Adobe Student Ambassador"
          subTitle="Kennesaw State University (Aug 2025 – Present)"
          result="USA"
          des="Represented Adobe on campus, produced tutorials, and connected students with Adobe creative resources and tools."
        />
        <ResumeCard
          title="Member — ColorStack"
          subTitle="Kennesaw State University (Jan 2025 – Present)"
          result="USA"
          des="Collaborated in peer-led tech circles focused on equity and excellence in computer science."
        />
        <ResumeCard
          title="AWS Campus Prep Series"
          subTitle="Amazon Web Services (Feb 2026)"
          result="Certificate"
          des="Completed AWS career readiness and cloud architecture sessions covering technical communication, customer engagement, and AWS solution design principles."
        />
      </div>
    </motion.div>
  );
};

export default Achievement;
