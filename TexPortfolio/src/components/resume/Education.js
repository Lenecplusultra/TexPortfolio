import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Kennesaw State University (Dec 2025)"
            result="GPA: 3.82/4.0"
            des="Relevant Courses: Data Structures & Algorithms, Distributed Systems, Operating Systems, Computer Networks, Parallel & Distributed Computing, Software Engineering, AI"
          />
          <ResumeCard
            title="iOS Development Bootcamp"
            subTitle="CodePath (May 2025 – Present)"
            result="In Progress"
            des="Developing scalable iOS apps with Swift and Xcode; mastering UIKit, MVC, and App Store deployment best practices."
          />
          <ResumeCard
            title="Technical Interview Prep"
            subTitle="CodePath (May 2025 – Present)"
            result="In Progress"
            des="Solving advanced data structures and algorithms problems weekly; preparing for top-tier technical interviews in a structured cohort."
          />
        </div>
      </div>
      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="PACI, Remote (May 2025 – Sep 2025)"
            result="Atlanta, GA"
            des="Architected RBAC system across 3 permission tiers; cut CI/CD cycle from 45 min to under 5 min; reduced PostgreSQL query latency ~60% through targeted indexing and query plan analysis."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Intelligentsia SA, Yaounde (May 2023 – Aug 2023)"
            result="Cameroon"
            des="Designed modular Java backend services automating 20+ enterprise workflows across 5 departments; built REST API layer bridging modern services with legacy systems, reducing manual processing by 50%."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Intelligentsia SA, Yaounde (May 2022 – Aug 2022)"
            result="Cameroon"
            des="Implemented Selenium/TestNG regression suites achieving 90% bug reduction; enhanced DB speed 40% via SQL optimization; resolved performance bottlenecks under concurrent load."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
