import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center cursor-pointer gap-[4px] hover:gap-2 transition-all duration-300">
            <img
              src={assets.logo}
              alt="logo"
              className="w-10 lg:w-12 hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
              LearnMate
            </span>
          </div>
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            LearnMate is your trusted online learning platform, bringing
            together expert educators, engaging courses, and interactive tools
            to help you achieve your goals. Whether you’re upskilling for your
            career or learning something new for fun, we’ve got you covered.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />
            <button className="bg-blue-600 w-24 h-9 text-white rounded cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © LearnMate. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
