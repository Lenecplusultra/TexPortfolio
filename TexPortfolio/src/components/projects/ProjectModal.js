import React, { useEffect } from 'react';
import { BsGithub, BsXLg } from "react-icons/bs";
import { FaGlobe, FaCheckCircle } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const { title, shortDes, stack, stackColors, accentColor, category, status,
          githubLink, demoLink, highlights, details } = project;

  const statusColor = {
    "Completed":   "#22c55e",
    "In Progress": "#f59e0b",
    "Live":        "#ff014f",
  }[status] || "#6b7280";

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
        style={{
          background: 'linear-gradient(160deg, #13151a 0%, #1a1d24 60%, #0f1115 100%)',
          border: `1px solid ${accentColor}33`,
          boxShadow: `0 0 60px ${accentColor}22`,
        }}
      >
        {/* Top accent bar */}
        <div className="w-full h-0.5 rounded-t-xl" style={{ backgroundColor: accentColor }} />

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              {/* Category + status */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-mono opacity-50 text-white">
                  {category}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-mono uppercase tracking-wider"
                  style={{ color: statusColor, border: `1px solid ${statusColor}44`, backgroundColor: `${statusColor}15` }}
                >
                  {status}
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-bold text-white leading-tight">{title}</h2>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <BsXLg size={14} />
            </button>
          </div>

          {/* Short description */}
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">{shortDes}</p>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/5" />

        {/* Context paragraph */}
        <div className="px-6 py-4">
          <h3 className="text-xs uppercase tracking-widest font-mono mb-3" style={{ color: accentColor }}>
            Overview
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{details}</p>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/5" />

        {/* Highlights */}
        <div className="px-6 py-4">
          <h3 className="text-xs uppercase tracking-widest font-mono mb-4" style={{ color: accentColor }}>
            Key Engineering Highlights
          </h3>
          <ul className="flex flex-col gap-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: accentColor, opacity: 0.7 }}
                  size={13}
                />
                <span className="text-gray-300 text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/5" />

        {/* Tech stack */}
        <div className="px-6 py-4">
          <h3 className="text-xs uppercase tracking-widest font-mono mb-4" style={{ color: accentColor }}>
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-full font-mono"
                style={{
                  color: stackColors[i] || '#aaa',
                  backgroundColor: `${stackColors[i]}15`,
                  border: `1px solid ${stackColors[i]}35`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: action buttons */}
        <div className="px-6 py-4 flex items-center gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/15 hover:border-white/40 transition-colors duration-200"
            style={{ backgroundColor: '#ffffff0a' }}
          >
            <BsGithub size={15} />
            View on GitHub
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
              style={{
                backgroundColor: accentColor,
                color: '#000',
              }}
            >
              <FaGlobe size={13} />
              Live Demo
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200 font-mono uppercase tracking-wider"
          >
            Close  esc
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
