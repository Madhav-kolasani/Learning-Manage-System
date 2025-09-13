import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";
// import { data } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const MyEnrollments = () => {
  const {
    enrolledCourses,
    calculateCourseDuration,
    navigate,
    userData,
    fetchUserEnrolledCourses,
    backendUrl,
    getToken,
    calculateNoOfLectures,
  } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([]);

  const getCourseProgress = async () => {
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/course-progress`,
            { courseId: course._id },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          let totalLectures = calculateNoOfLectures(course);
          const lectureCompleted = data.progressData
            ? data.progressData.lectureCompleted.length
            : 0;
          return { totalLectures, lectureCompleted };
        })
      );
      setProgressArray(tempProgressArray);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (userData) {
      fetchUserEnrolledCourses();
    }
  }, [userData]);

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      getCourseProgress();
    }
  }, [enrolledCourses]);

  return (
    <>
      <div className="md:px-36 px-8 pt-10 animate-fade-in">
        <h1 className="text-2xl font-semibold hover:text-blue-600 transition-colors duration-500 transform hover:scale-105">
          My Enrollments
        </h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden hover:bg-gray-50 transition-colors duration-300">
            <tr>
              <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                Course
              </th>
              <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                Duration
              </th>
              <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                Completed
              </th>
              <th className="px-4 py-3 font-semibold truncate hover:text-blue-600 transition-colors duration-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => (
              <tr
                key={index}
                className="border-b border-gray-500/20 hover:bg-blue-50 hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28 hover:scale-110 hover:rotate-2 transition-transform duration-300 rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm hover:text-blue-600 transition-colors duration-300 font-medium">
                      {course.courseTitle}
                    </p>
                    <Line
                      strokeWidth={2}
                      percent={
                        progressArray[index]
                          ? (progressArray[index].lectureCompleted * 100) /
                            progressArray[index].totalLectures
                          : 0
                      }
                      className="bg-gray-300 rounded-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden hover:text-blue-600 transition-colors duration-300 font-medium">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden hover:text-blue-600 transition-colors duration-300 font-medium">
                  {progressArray[index] &&
                    `${progressArray[index].lectureCompleted}/ ${progressArray[index].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button
                    onClick={() => navigate("/player/" + course._id)}
                    className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white cursor-pointer rounded-lg hover:bg-blue-700 hover:scale-110 hover:shadow-lg transition-all duration-300 transform active:scale-95"
                  >
                    {progressArray[index] &&
                    progressArray[index].lectureCompleted /
                      progressArray[index].totalLectures ===
                      1
                      ? "Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
