import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="w-full h-20 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(17,19,24,0.95)' : '#111318',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      {/* Left: logo + name */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Tex Yonzo"
          className="w-10 h-10 rounded-full border-[1px] border-white/15 object-cover"
        />
        <div className="flex flex-col leading-tight">
          <h1 className="text-sm font-bold text-white tracking-widest uppercase">Tex Yonzo</h1>
          <span className="text-xs font-mono text-designColor tracking-wider">Software Engineer</span>
        </div>
      </div>

      {/* Right: nav links */}
      <ul className="hidden mdl:flex items-center gap-8">
        {navLinksdata.map(({ _id, title, link }) => (
          <li key={_id}>
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-mono text-gray-400 tracking-wider cursor-pointer hover:text-white transition-colors duration-300 uppercase"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black/40 w-10 h-10 inline-flex items-center justify-center rounded-lg text-designColor cursor-pointer border border-white/10"
      >
        <FiMenu />
      </span>

      {/* Mobile drawer */}
      {showMenu && (
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 scrollbar-hide"
          style={{
            background: 'rgba(14,16,20,0.97)',
            backdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex flex-col gap-8 py-8 px-6 relative">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full border border-white/15 object-cover" src={logo} alt="Tex Yonzo" />
              <div>
                <h1 className="text-sm font-bold text-white tracking-widest uppercase">Tex Yonzo</h1>
                <span className="text-xs font-mono text-designColor">Software Engineer</span>
              </div>
            </div>

            <ul className="flex flex-col gap-5 mt-2">
              {navLinksdata.map((item) => (
                <li key={item._id}>
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-sm font-mono text-gray-400 tracking-widest cursor-pointer hover:text-white duration-300 uppercase"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-2">
              {[
                { href: "https://www.instagram.com/texyonzo", icon: <FaInstagram /> },
                { href: "https://x.com/Lenecplusultraa", icon: <FaTwitter /> },
                { href: "https://linkedin.com/in/texyonzo", icon: <FaLinkedinIn /> },
              ].map(({ href, icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="bannerIcon w-10 h-10 text-base">
                  {icon}
                </a>
              ))}
            </div>

            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white duration-300 text-xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
