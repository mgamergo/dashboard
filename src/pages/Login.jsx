import React from "react";

const Login = () => {
  return (
    <div className="relative flex h-screen">
      {/* Logo */}
      <h2 className="absolute top-4 left-4 font-bold text-xl">Your Logo</h2>

      {/* Left Side - Welcome Text and Image */}
      <div className="h-full w-1/2"></div>
      

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-6 self-start ml-24">Sign in</h2>
        <form className="space-y-4 w-2/3 max-w-sm flex flex-col">
          <input
            type="text"
            placeholder="Enter email or user name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3f3a9f] bg-[#4d47c331] placeholder:text-[#4d47c3]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3f3a9f] bg-[#4d47c331] placeholder:text-[#4d47c3]"
          />
          <a href="#" className="text-sm text-[#4d47c3] hover:underline self-end">Forgot password?</a>
          <button
            type="submit"
            className="w-full bg-[#4d47c3] text-white p-3 rounded-md font-semibold hover:bg-[#3f3a9f] transition"
          >
            Login
          </button>
          <p className="text-center text-gray-500">or continue with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <img src="/Authpages/google.svg" alt="Google" className="w-8 h-8 cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
