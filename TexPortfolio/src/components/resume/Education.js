import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] font-mono">2021 — 2026</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      </div>

      <div className="w-full border-l-[3px] border-designColor/20 flex flex-col gap-8 pl-0">
        <ResumeCard
          title="BSc in Computer Science"
          subTitle="Kennesaw State University (Dec 2025)"
          result="GPA: 3.82/4.0"
          des="Relevant Courses: Data Structures & Algorithms, Distributed Systems, Operating Systems, Computer Networks, Parallel & Distributed Computing, Software Engineering, Artificial Intelligence"
        />
        <ResumeCard
          title="Technical Interview Prep"
          subTitle="CodePath (May 2025 – Jul 2025)"
          result="Completed"
          des="Solved advanced data structures and algorithms problems weekly; prepared for top-tier technical interviews in a structured cohort."
        />
        <ResumeCard
          title="AWS Cloud Practitioner — Cloud Basics"
          subTitle="AWS Skills Centers (Feb 2026)"
          result="Completed"
          des="Completed AWS career readiness and cloud architecture training focused on cloud fundamentals, AWS solution design principles, and technical communication."
        />
      </div>
    </motion.div>
  );
}

export default Education
