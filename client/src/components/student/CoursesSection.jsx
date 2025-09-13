import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8 text-center animate-fade-in">
      <h2 className="text-3xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-500 transform hover:scale-105">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 mb-2 hover:text-gray-700 transition-colors duration-300">
        Discover our top-rated courses across various categories. From coding
        and design to <br /> business and wellness, our courses are crafted to
        deliver results.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <div
            key={index}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:scale-110 transition-all duration-300 transform active:scale-95"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
