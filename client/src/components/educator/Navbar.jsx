import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to="/">
      <div
        className="flex items-center cursor-pointer gap-[4px]">
        <img src={assets.logo} alt="logo" className="w-10 lg:w-12" />
        <span className="text-xl font-semibold text-gray-800">Welcome back Educator..</span>
      </div>
      </Link>
      <div className="flex items-center gap-5 text-gray-500">
        <p>Hi👋🏻 {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img}></img>
        )}
      </div>
    </div>
  );
};

export default Navbar;
