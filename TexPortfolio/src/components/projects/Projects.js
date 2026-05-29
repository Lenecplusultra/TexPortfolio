import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {/* Project 1 - Distributed KV Store */}
        <ProjectsCard
          title="Distributed Key-Value Store"
          des="Built a distributed key-value database in Go featuring custom TCP protocols, consistent hashing, replication, write-ahead logging, TTL expiration, rate limiting, and concurrent storage via goroutines."
          src={projectFive}
          githubLink="https://github.com/Lenecplusultra"
        />

        {/* Project 2 - ARIP */}
        <ProjectsCard
          title="ANBELO Retail Intelligence Platform"
          des="Cloud-native analytics platform built on SAGE ERP for multi-store retail. Centralizes sales and inventory data, delivering executive dashboards, inventory alerts, and revenue analytics."
          src={projectThree}
          githubLink="https://github.com/Lenecplusultra"
        />

        {/* Project 3 - OpsPilot AI */}
        <ProjectsCard
          title="OpsPilot AI"
          des="AI-powered engineering assistant that executes operational tasks through natural language while enforcing RBAC policies, approval workflows, and immutable audit logging."
          src={projectOne}
          githubLink="https://github.com/Lenecplusultra"
        />

        {/* Project 4 - Ads Streaming Pipeline */}
        <ProjectsCard
          title="Real-Time Ads Streaming Pipeline"
          des="A real-time data streaming system that ingests ad click events, processes them using Spark Structured Streaming, and persists aggregated insights in PostgreSQL."
          src={projectFive}
          githubLink="https://github.com/Lenecplusultra/real-time-ads-streaming-pipeline"
          demoLink="https://rta-ads-dashboard.onrender.com/"
        />

        {/* Project 5 - Cogitons */}
        <ProjectsCard
          title="Cogitons"
          des="A subject-centered knowledge platform for Cameroonian students and young professionals. Built with Next.js, FastAPI, and PostgreSQL with full product-first documentation: requirements, architecture, user flows, and DB design."
          src={projectTwo}
          githubLink="https://github.com/Lenecplusultra"
        />

        {/* Project 6 - AI Doc Assistant */}
        <ProjectsCard
          title="AI-Powered Internal Doc Assistant"
          des="ChatGPT-style assistant to search documentation in natural language using React, FastAPI, LangChain & GPT. Deployed on Vercel + Render."
          src={projectOne}
          githubLink="https://github.com/Lenecplusultra/ai-doc-assistant"
          demoLink="https://ai-doc-assistant-seven.vercel.app/"
        />

      </div>
    </section>
  );
};

export default Projects;
