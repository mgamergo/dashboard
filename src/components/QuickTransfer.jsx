import React from "react";

const QuickTransfer = () => {
  const users = [
    { name: "Livia Bator", role: "CEO", img: "/quick_transfer/1.png" },
    { name: "Randy Press", role: "Director", img: "/quick_transfer/2.png" },
    { name: "Workman", role: "Designer", img: "/quick_transfer/3.png" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-2xl max-w-md mx-auto shadow-lg">
      {/* User List */}
      <div className="flex justify-between items-center mb-6">
        {users.map((user, index) => (
          <div key={index} className="text-center">
            <img
              src={user.img}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            <h4 className="text-sm font-semibold mt-2">{user.name}</h4>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        ))}
        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-md cursor-pointer">
          <span className="text-xl font-bold text-gray-500">&gt;</span>
        </div>
      </div>

      {/* Amount and Send Button */}
      <div className="flex items-center justify-between px-4 py-2 rounded-xl">
        <p className="text-sm text-gray-500">Write Amount</p>
        <div className=" flex items-center justify-between bg-gray-300 w-60 rounded-full">
            <input
              type="text"
              placeholder="525.50"
              className="bg-transparent border-none text-center text-sm font-semibold text-gray-400 focus:outline-none w-24"
            />
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L21 12m0 0L10.5 4.5M21 12H3"
                />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
