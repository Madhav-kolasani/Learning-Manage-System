import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },
    { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    {
      name: "My Courses",
      path: "/educator/my-courses",
      icon: assets.my_course_icon,
    },
    {
      name: "Students Enrolled",
      path: "/educator/students-enrolled",
      icon: assets.person_tick_icon,
    },
  ];
  return (
    isEducator && (
      <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col animate-fade-in bg-gradient-to-b from-indigo-10 to-white">
        {menuItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 transition-all duration-300 hover:scale-105 hover:shadow-md ${
                isActive
                  ? "bg-indigo-50 border-r-[6px] border-indigo-500/90 transform scale-105"
                  : "hover:bg-gray-100/90 hover:translate-x-2"
              }`
            }
            to={item.path}
            key={item.name}
            end={item.path === "/educator"}
          >
            <img
              src={item.icon}
              alt=""
              className="w-6 h-6 hover:scale-125 hover:rotate-12 transition-transform duration-300"
            />
            <p className="md:block hidden text-center hover:text-indigo-600 transition-colors duration-300">
              {item.name}
            </p>
          </NavLink>
        ))}
      </div>
    )
  );
};

export default Sidebar;
