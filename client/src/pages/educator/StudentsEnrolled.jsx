import { useContext, useEffect, useState } from "react";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);
  const { backendUrl, getToken, isEducator } = useContext(AppContext);
  const fetchEnrolledStudents = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(
        `${backendUrl}/api/educator/enrolled-students`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        setEnrolledStudents(data.enrolledStudents.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isEducator) {
      fetchEnrolledStudents();
    }
  }, [isEducator]);

  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 animate-fade-in bg-gradient-to-b from-indigo-100/60 to-white">
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <table className="table-fixed md:table-auto w-full overflow-hidden pb-4">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left hover:bg-gray-50 transition-colors duration-300">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell hover:text-blue-600 transition-colors duration-300">
                #
              </th>
              <th className="px-4 py-3 font-semibold hover:text-blue-600 transition-colors duration-300">
                Student Name
              </th>
              <th className="px-4 py-3 font-semibold hover:text-blue-600 transition-colors duration-300">
                Course Title
              </th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell hover:text-blue-600 transition-colors duration-300">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {enrolledStudents.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-500/20 hover:bg-blue-50 hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                <td className="px-4 py-3 text-center hidden sm:table-cell hover:text-blue-600 transition-colors duration-300 font-medium">
                  {index + 1}
                </td>
                <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                  <img
                    src={item.student.imageUrl}
                    alt="image"
                    className="w-9 h-9 rounded-full hover:scale-110 hover:rotate-6 transition-transform duration-300 shadow-md"
                  />
                  <span className="truncate hover:text-blue-600 transition-colors duration-300 font-medium">
                    {item.student.name}
                  </span>
                </td>
                <td className="px-4 py-3 truncate hover:text-blue-600 transition-colors duration-300 font-medium">
                  {item.courseTitle}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell hover:text-blue-600 transition-colors duration-300 font-medium">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
