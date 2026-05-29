import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] font-mono">2022 — Present</p>
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
      </div>

      <div className="w-full border-l-[3px] border-designColor/20 flex flex-col gap-8">
        <ResumeCard
          title="Software Engineer Intern"
          subTitle="PACI, Remote (May 2025 – Sep 2025)"
          result="Atlanta, GA"
          des="Architected RBAC authentication system across 3 permission tiers (100+ test scenarios); cut CI/CD release cycle from 45 min to under 5 min via GitHub Actions + AWS; reduced PostgreSQL query latency ~60% through targeted index design and query plan analysis; diagnosed production failures with structured logging, cutting coordination conflicts by 80%."
        />
        <ResumeCard
          title="Software Engineer Intern"
          subTitle="Intelligentsia SA, Yaounde (May 2023 – Aug 2023)"
          result="Cameroon"
          des="Designed modular Java backend services automating 20+ enterprise workflows across 5 departments, reducing manual processing time by 50%. Built REST API integration layer bridging modern services with legacy systems, improving operational consistency across teams."
        />
        <ResumeCard
          title="Software Engineer Intern"
          subTitle="Intelligentsia SA, Yaounde (May 2022 – Aug 2022)"
          result="Cameroon"
          des="Implemented Selenium/TestNG regression suites achieving 90% bug reduction; enhanced DB speed 40% via SQL optimization; identified and resolved performance bottlenecks under concurrent load."
        />
      </div>
    </motion.div>
  );
};

export default Experience;
