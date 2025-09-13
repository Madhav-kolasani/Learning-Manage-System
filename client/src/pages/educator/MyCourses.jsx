import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { toast } from "react-toastify";
import axios from "axios";

const MyCourses = () => {
  const { currency, getToken, backendUrl, isEducator } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/educator/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setCourses(data.courses);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses();
    }
  }, [isEducator]);

  return courses ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 animate-fade-in bg-gradient-to-b from-indigo-100/60 to-white">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium hover:text-blue-600 transition-colors duration-500 transform hover:scale-105">
          My Courses
        </h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left hover:bg-gray-50 transition-colors duration-300">
              <tr>
                <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                  {" "}
                  All Courses
                </th>
                <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                  Earnings
                </th>
                <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                  Students
                </th>
                <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                  Published On
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-500/20 hover:bg-blue-50 hover:scale-105 transition-all duration-300 hover:shadow-md"
                >
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img
                      src={course.courseThumbnail}
                      alt="Course Image"
                      className="w-16 hover:scale-110 hover:rotate-2 transition-transform duration-300 rounded-lg shadow-md"
                    />
                    <span className="truncate hidden md:block hover:text-blue-600 transition-colors duration-300 font-medium">
                      {course.courseTitle}
                    </span>
                  </td>
                  <td className="px-4 py-3 hover:text-green-600 transition-colors duration-300 font-medium">
                    {currency}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className="px-4 py-3 hover:text-blue-600 transition-colors duration-300 font-medium">
                    {course.enrolledStudents.length}
                  </td>
                  <td className="px-4 py-3 hover:text-blue-600 transition-colors duration-300 font-medium">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
