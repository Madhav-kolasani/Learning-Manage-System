import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0 animate-pulse">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold hover:text-blue-600 transition-all duration-500 transform hover:scale-105">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm hover:text-gray-700 transition-colors duration-300">
        lncididunt sint fugiat pariatur cupidatat consectetur sit cilium anim id
        veniam aliqua proident excepteur commodo do ea
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-blue-600 cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:scale-110 transition-all duration-300 transform active:scale-95">
          Get Started
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600 hover:gap-4 transition-all duration-300 transform hover:scale-105">
          Learn more{" "}
          <img
            src={assets.arrow_icon}
            alt="arrow_icon"
            className="transition-transform duration-300 hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
