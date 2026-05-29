import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "Java", "Go", "TypeScript", "JavaScript", "SQL", "C++"],
    color: "#3776AB",
  },
  {
    label: "Backend & Systems",
    skills: ["FastAPI", "Flask", "gRPC", "Microservices", "Kafka", "Redis", "REST APIs", "Multithreading"],
    color: "#009688",
  },
  {
    label: "Distributed Systems",
    skills: ["Consistent Hashing", "Replication", "Saga Pattern", "Leader Election", "Fault Tolerance"],
    color: "#ff014f",
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, IAM)", "Docker", "Kubernetes", "GitHub Actions CI/CD"],
    color: "#FF9900",
  },
  {
    label: "AI / LLM",
    skills: ["LangChain", "OpenAI API", "Anthropic API", "RAG Pipelines", "MCP", "Prompt Engineering"],
    color: "#10A37F",
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization", "Indexing", "Sharding"],
    color: "#336791",
  },
  {
    label: "Observability",
    skills: ["OpenTelemetry", "Structured Logging", "Load Testing", "Profiling", "Bottleneck Analysis"],
    color: "#f5a623",
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase font-mono">Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #13151a, #1a1d24)',
              border: `1px solid ${group.color}22`,
              boxShadow: `0 4px 20px ${group.color}08`,
            }}
          >
            {/* colored left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl" style={{ backgroundColor: group.color }} />
            <p className="text-xs uppercase tracking-widest font-mono mb-4 pl-3" style={{ color: group.color }}>
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2 pl-3">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-xs font-mono text-gray-300 rounded-full transition-all duration-200 hover:text-white cursor-default"
                  style={{
                    backgroundColor: `${group.color}12`,
                    border: `1px solid ${group.color}30`,
                  }}
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
