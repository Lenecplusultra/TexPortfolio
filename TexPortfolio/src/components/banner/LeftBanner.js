import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

// Animated terminal line that cycles through tech facts
const terminalLines = [
  '> building distributed systems in Go & Python',
  '> deploying to Kubernetes with GitHub Actions CI/CD',
  '> implementing Saga orchestration with Kafka',
  '> fine-tuning RAG pipelines with LangChain + OpenAI',
  '> reducing PostgreSQL query latency by ~60%',
  '> open to full-time SWE roles — Atlanta, GA or remote',
];

const TerminalLine = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const line = terminalLines[index];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setDisplayed(line.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed('');
        setCharIdx(0);
        setIndex(i => (i + 1) % terminalLines.length);
      }, 2800);
      return () => clearTimeout(t);
    }
  }, [charIdx, index]);

  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono"
      style={{
        background: 'rgba(10,12,16,0.8)',
        border: '1px solid rgba(255,1,79,0.15)',
      }}
    >
      <span className="text-designColor select-none">$</span>
      <span className="text-green-400">{displayed}</span>
      <span className="w-1.5 h-3.5 bg-green-400 opacity-80 animate-pulse inline-block" />
    </div>
  );
};

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Systems Builder.",
      "Backend Engineer.",
      "Distributed Systems Dev.",
      "AI Applications Dev.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2500,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-px bg-designColor" />
          <h4 className="text-sm font-mono text-gray-400 uppercase tracking-[4px]">
            Welcome to my world
          </h4>
        </div>

        {/* Name */}
        <h1 className="text-5xl lgl:text-6xl font-bold text-white leading-tight">
          Hi, I'm{' '}
          <span className="text-designColor capitalize">Tex Yonzo</span>
        </h1>

        {/* Typewriter */}
        <h2 className="text-3xl lgl:text-4xl font-bold text-white">
          a{' '}
          <span
            style={{ textShadow: '0 0 20px rgba(255,1,79,0.3)' }}
          >
            {text}
          </span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>

        {/* Bio */}
        <p className="text-base font-bodyFont leading-7 text-gray-400 max-w-lg">
          I build cloud-native backends, distributed systems, and AI-powered applications.
          From event-driven Kafka pipelines to MCP-powered engineering assistants —
          turning complex problems into clean, scalable software.
        </p>

        {/* Terminal line */}
        <TerminalLine />

        {/* Quick stats */}
        <div className="flex gap-6 mt-1">
          {[
            { value: '3+', label: 'Years coding' },
            { value: '6+', label: 'Projects shipped' },
            { value: '4.0', label: 'GPA' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span
                className="text-2xl font-bold font-mono"
                style={{ color: '#ff014f' }}
              >
                {value}
              </span>
              <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Media />
    </div>
  );
};

export default LeftBanner;
