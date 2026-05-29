import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

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
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tex Yonzo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I build cloud-native backends, distributed systems, and AI-powered applications.
          From event-driven order pipelines to MCP-powered engineering assistants,
          I turn complex problems into clean, scalable software.
          Always shipping... one system at a time.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
