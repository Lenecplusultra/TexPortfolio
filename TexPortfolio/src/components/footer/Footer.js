import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      
      {/* Profile and Socials */}
      <div className="w-full h-full flex flex-col items-start gap-4">
        <img
          className="w-16 h-16 object-cover rounded-full border-[2px] border-gray-600 -ml-100000"
          src={logo}
          alt="Tex Yonzo"
        />
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/texyonzo"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Lenecplusultraa"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/texyonzo"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Quick Links with react-scroll */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Quick Links</h3>
        <ul className="flex flex-col gap-2 font-titleFont font-medium py-6">
          {[
            { label: 'About', to: 'about' },
            { label: 'Projects', to: 'projects' },
            { label: 'Contact', to: 'contact' },
            { label: 'Resume', to: 'resume' },
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg text-gray-300 hover:text-designColor duration-300 cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources with real links */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Resources</h3>
        <ul className="flex flex-col gap-2 font-titleFont font-medium py-6 text-sm">
          <li>
            <a
              href="/ResumeTex_open.pdf"
              download
              className="text-gray-300 hover:text-designColor duration-300"
            >
              Resume (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/texyonzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-designColor duration-300"
            >
              Portfolio GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Contact</h3>
        <ul className="flex flex-col gap-2 font-titleFont font-medium py-6 text-gray-400 text-sm">
          <li>Email: yytbrayan@gmail.com</li>
          <li>Phone: +1 470 662 5664</li>
          <li>Location: Atlanta, GA</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
