import React from "react";

const Sidebar = () => {
  return (
    <div className="w-2/12 border h-full">

      {/* LOGO SECTION */}
      <div className="w-full flex justify-center items-center gap-3 py-8">
        <div className="w-8 h-8">
          <img src="/sidebar/sidebar_icon.png" alt="logo" />
        </div>
        <h2 className="font-semibold text-xl">BankDash.</h2>
      </div>

      {/* MENU ITEMS SECTION */}
      <div>
        <div className="w-full flex pl-8 items-center gap-4 p-4 cursor-pointer border-8 border-[#544cea] border-r-0 border-b-0 border-t-0 rounded">
          <img src= '/sidebar/1.svg' className="w-5 h-5" />
          <p className="text-base text-[#4d47c3] font-semibold">Dashboard</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/2.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Transactions</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/3.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Accounts</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/4.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Investments</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/5.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Credit Cards</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/6.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Loans</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/7.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Services</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/8.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">My Priviliges</p>
        </div>
        <div className="w-full flex pl-10 items-center gap-4 p-4 cursor-pointer ">
          <img src= '/sidebar/9.svg' className="w-5 h-5" />
          <p className="text-base text-gray-300">Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
