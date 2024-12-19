import { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-orange-500 px-16 py-4 text-slate-950 backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-orange-600 to-slate-800 bg-clip-text text-transparent opacity-80 text-4xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Abidin.SP
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
        >
          <li>Home</li>
        </a>
        <a
          href="#skills"
          className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
        >
          <li>Skills</li>
        </a>
        <a
          href="#blog"
          className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
        >
          <li>Blog</li>
        </a>
        <a
          href="#project"
          className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
        >
          <li>Project</li>
        </a>
        <a
          href="#contact"
          className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
        <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub />
        </li>
        <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin />
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[75px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-orange-500 bg-white/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
            >
              <li>Home</li>
            </a>
            <a
              href="#skills"
              className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
            >
              <li>Skills</li>
            </a>
            <a
              href="#blog"
              className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
            >
              <li>Blog</li>
            </a>
            <a
              href="#project"
              className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
            >
              <li>Project</li>
            </a>
            <a
              href="#contact"
              className="font-semibold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-600"
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsYoutube />
            </li>
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <BsGithub />
            </li>
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
