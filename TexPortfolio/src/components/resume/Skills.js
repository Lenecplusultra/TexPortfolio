import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "Java", "Go", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    label: "Backend & Systems",
    skills: ["FastAPI", "Flask", "gRPC", "Microservices", "Kafka", "Redis", "REST APIs", "Multithreading"],
  },
  {
    label: "Distributed Systems",
    skills: ["Consistent Hashing", "Replication", "Saga Pattern", "Leader Election", "Fault Tolerance"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, IAM)", "Docker", "Kubernetes", "GitHub Actions CI/CD"],
  },
  {
    label: "AI / LLM",
    skills: ["LangChain", "OpenAI API", "Anthropic API", "RAG Pipelines", "MCP", "Prompt Engineering"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization", "Indexing", "Sharding"],
  },
  {
    label: "Observability",
    skills: ["OpenTelemetry", "Structured Logging", "Load Testing", "Profiling", "Bottleneck Analysis"],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg p-6 shadow-shadowOne"
          >
            <p className="text-sm text-designColor uppercase tracking-widest mb-4 font-semibold">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm text-gray-300 border border-gray-600 rounded-full hover:border-designColor hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
