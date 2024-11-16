import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 w-full border flex justify-between items-center px-8 ">
      <div>
        <h2 className="text-xl font-medium">OverView</h2>
      </div>
      <div className="flex items-center gap-5">
        <input className="bg-[#f5f7fa] h-10 rounded-full p-4 placeholder:text-gray-500 placeholder:text-xs focus:border focus:border-purple-900 outline-none transition-colors duration-150" placeholder="Search for something" />
        <div className="h-10 w-10">
          <img src="/navbar/Group 4.svg" />
        </div>
        <div className="h-10 w-10">
          <img src="/navbar/settings.svg" />
        </div>
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src="/navbar/profile_pic.png"
            alt="Profile Pic"
            className="h-full w-full object-cover object-right-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
