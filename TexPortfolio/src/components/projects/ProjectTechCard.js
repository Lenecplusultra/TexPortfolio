import React from 'react';

// Inline SVG icons for common techs
const TechIcon = ({ name, color }) => {
  const icons = {
    Go: (
      <svg viewBox="0 0 40 15" width="32" height="12" fill={color}>
        <text x="0" y="12" fontFamily="monospace" fontSize="13" fontWeight="bold">Go</text>
      </svg>
    ),
  };
  // Fallback: colored dot + name
  return (
    <span className="flex items-center gap-1">
      <span style={{ backgroundColor: color }} className="w-2 h-2 rounded-full inline-block flex-shrink-0" />
    </span>
  );
};

const categoryIcons = {
  "Distributed Systems": "⚙",
  "Backend Systems":     "🔧",
  "AI Systems":          "◈",
  "Cloud Platforms":     "☁",
  "Product Engineering": "◻",
};

const ProjectTechCard = ({ project, onClick }) => {
  const { title, stack, stackColors, accentColor, category, status } = project;

  const statusColor = {
    "Completed":   "#22c55e",
    "In Progress": "#f59e0b",
    "Live":        "#ff014f",
  }[status] || "#6b7280";

  return (
    <div
      onClick={onClick}
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
      style={{
        background: `linear-gradient(135deg, #0d0f12 0%, #141720 50%, #0a0c10 100%)`,
        border: `1px solid #1e2230`,
      }}
    >
      {/* Accent glow top-left */}
      <div
        className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
        style={{ backgroundColor: accentColor, transform: 'translate(-30%, -30%)' }}
      />

      {/* Grid lines background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
      </svg>

      {/* Category label top-left */}
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <span className="text-xs uppercase tracking-widest font-mono opacity-40 text-white">
          {categoryIcons[category] || "◆"} {category}
        </span>
      </div>

      {/* Status badge top-right */}
      <div className="absolute top-3 right-4">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-mono uppercase tracking-wider"
          style={{ color: statusColor, border: `1px solid ${statusColor}33`, backgroundColor: `${statusColor}11` }}
        >
          {status}
        </span>
      </div>

      {/* Center: accent line + title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
        <div
          className="w-10 h-0.5 rounded-full group-hover:w-16 transition-all duration-300"
          style={{ backgroundColor: accentColor }}
        />
        <h3
          className="text-white text-center font-bold text-sm uppercase tracking-widest leading-tight"
          style={{ textShadow: `0 0 20px ${accentColor}44` }}
        >
          {title}
        </h3>
        <div
          className="w-10 h-0.5 rounded-full group-hover:w-16 transition-all duration-300"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Bottom: tech stack pills */}
      <div className="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-4">
        {stack.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-0.5 rounded font-mono"
            style={{
              color: stackColors[i] || '#aaa',
              backgroundColor: `${stackColors[i]}15` || '#ffffff10',
              border: `1px solid ${stackColors[i]}30` || '#ffffff20',
            }}
          >
            {tech}
          </span>
        ))}
        {stack.length > 4 && (
          <span className="text-xs px-2 py-0.5 rounded font-mono text-gray-500 bg-white/5 border border-white/10">
            +{stack.length - 4}
          </span>
        )}
      </div>

      {/* Hover overlay: "View Details" */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: `${accentColor}15` }}
      >
        <span
          className="text-xs uppercase tracking-widest font-mono px-4 py-2 rounded-full border"
          style={{ color: accentColor, borderColor: `${accentColor}66`, backgroundColor: '#00000088' }}
        >
          View Details →
        </span>
      </div>
    </div>
  );
};

export default ProjectTechCard;
