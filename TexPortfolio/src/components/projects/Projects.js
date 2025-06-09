import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {/* Project 1 - AI Doc Assistant */}
        <ProjectsCard
          title="AI-Powered Internal Doc Assistant"
          des="ChatGPT-style assistant to search documentation in natural language using React, FastAPI, LangChain & GPT. Deployed on Vercel + Render."
          src={projectOne}
          githubLink="https://github.com/Leneceplusultra/ai-doc-assistant"
          demoLink="https://ai-doc-assistant-c0jgyhuwh-leneceplusultras-projects.vercel.app"
        />

        {/* Project 2 - Restaurant System */}
        <ProjectsCard
          title="Smart Restaurant Ordering System"
          des="Real-time UI updates for kitchen dispatch; secured w/ JWT, improved floor coordination by 40%."
          src={projectTwo}
          githubLink="https://github.com/Lenecplusultra/restaurant-automation"
        />

        {/* Project 3 - Telecom Platform */}
        <ProjectsCard
          title="Telecom Billing Platform"
          des="Automated billing + ML-based anomaly detection over Orange, MTN & Camtel; 80% clerical load cut."
          src={projectThree}
          githubLink="https://github.com/texyonzo"
        />

        {/* Project 4 - Portfolio Website */}
        <ProjectsCard
          title="My Portfolio Website"
          des="Personal developer portfolio built with React & TailwindCSS, showcasing projects, resume & contact form. Deployed on Vercel."
          src={projectThree}
          githubLink="https://github.com/texyonzo/portfolio"
          demoLink="https://lenecplusultra.github.io/TexPortfolio/"
        />
      </div>
    </section>
  );
};

export default Projects;
