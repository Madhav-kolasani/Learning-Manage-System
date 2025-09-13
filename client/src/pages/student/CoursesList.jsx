import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left animate-fade-in bg-gradient-to-b from-emerald-100 to-white">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-500">
              Course List
            </h1>
            <p className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
              <span
                className="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline transition-all duration-300"
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              / <span>Course List</span>
            </p>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <SearchBar data={input} />
          </div>
        </div>

        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600 hover:bg-gray-50 hover:shadow-md transition-all duration-300 rounded-lg">
            <p className="hover:text-blue-600 transition-colors duration-300">
              {input}
            </p>
            <img
              src={assets.cross_icon}
              alt="cross"
              className="cursor-pointer hover:scale-125 hover:rotate-90 transition-transform duration-300"
              onClick={() => {
                navigate("/course-list");
              }}
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
          {filteredCourse.map((course, index) => (
            <div
              key={index}
              className="transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
