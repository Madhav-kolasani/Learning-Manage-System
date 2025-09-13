import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t animate-fade-in">
      <div className="flex items-center gap-4 hover:gap-6 transition-all duration-300">
        <img
          className="hidden md:block w-10 hover:rotate-12 hover:scale-110 transition-transform duration-300"
          src={assets.logo}
          alt="logo"
        />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
          Copyright 2025 © LearnMate. All Rights Reserved
        </p>
      </div>
      <div className="flex items-center gap-3 max-md:mt-4">
        <a
          href="#"
          className="hover:scale-125 hover:rotate-12 transition-transform duration-300"
        >
          <img
            src={assets.facebook_icon}
            alt="facebook icon"
            className="filter hover:brightness-125"
          />
        </a>
        <a
          href="#"
          className="hover:scale-125 hover:-rotate-12 transition-transform duration-300"
        >
          <img
            src={assets.twitter_icon}
            alt="twitter icon"
            className="filter hover:brightness-125"
          />
        </a>
        <a
          href="#"
          className="hover:scale-125 hover:rotate-12 transition-transform duration-300"
        >
          <img
            src={assets.instagram_icon}
            alt="instagram icon"
            className="filter hover:brightness-125"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
