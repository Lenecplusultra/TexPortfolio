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
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Kennesaw State University (Expected May 2026)"
            result="GPA: 4.0"
            des="Relevant Courses: Data Structures, Operating Systems, AI, Mobile App Dev, Software Engineering"
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
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      </div>
    </motion.div>
  );
}

export default Education