import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { bannerImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full p-6 lgl:p-8 rounded-2xl flex flex-col gap-6 justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #13151a, #1a1d24)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '10px 10px 19px #09090c, -10px -10px 19px #141720',
      }}
    >
      {/* Red corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-designColor/30 rounded-tr-lg" />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-designColor/20 rounded-bl-lg" />
      </div>

      {/* Photo — your actual banner photo */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover object-top rounded-xl"
          src={bannerImg}
          alt="Tex Yonzo"
        />
        {/* Status badge on photo */}
        <div
          className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(10,12,16,0.92)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="text-xs font-mono text-gray-300 tracking-wide">Open to work</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-2xl font-bold text-white">Tex Yonzo</h3>
          <p className="text-sm font-mono text-designColor mt-1 tracking-wider">Software Engineer</p>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Building distributed systems, cloud-native backends, and AI-powered applications. Based in Atlanta, GA.
        </p>

        {/* Contact details */}
        <div className="flex flex-col gap-2 mt-1">
          <a
            href="mailto:yytbrayan@gmail.com"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="text-designColor font-mono text-xs">EMAIL</span>
            <span className="text-gray-500 font-mono text-xs">→</span>
            <span>yytbrayan@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-designColor font-mono text-xs">PHONE</span>
            <span className="text-gray-500 font-mono text-xs">→</span>
            <span>+1 470 662 5664</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-designColor font-mono text-xs">LOCATION</span>
            <span className="text-gray-500 font-mono text-xs">→</span>
            <span>Atlanta, GA</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* Socials */}
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase font-mono text-gray-600 tracking-widest">Find me on</p>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/texyonzo" target="_blank" rel="noopener noreferrer" className="bannerIcon w-11 h-11 text-base"><FaInstagram /></a>
          <a href="https://x.com/Lenecplusultraa" target="_blank" rel="noopener noreferrer" className="bannerIcon w-11 h-11 text-base"><FaTwitter /></a>
          <a href="https://linkedin.com/in/texyonzo" target="_blank" rel="noopener noreferrer" className="bannerIcon w-11 h-11 text-base"><FaLinkedinIn /></a>
          <a href="https://github.com/Lenecplusultra" target="_blank" rel="noopener noreferrer" className="bannerIcon w-11 h-11 text-base"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
