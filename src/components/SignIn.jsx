import React from "react";
import img1 from "../assets/img2.png";
import logo from "../assets/logo.png";
import googleIcon from "../assets/googleIcon.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col lg:flex-row gap-14 lg:gap-2">
      
      {/* Left Side */}
      <div className="bg-[linear-gradient(150.67deg,#2D90EC_93.46%,rgba(59,100,137,0)_98.45%)] flex-1 flex flex-col pb-10  items-center justify-center relative text-white px-6">

        <h2 className="absolute top-5 left-5 font-inter font-extrabold italic text-[25px] sm:text-[32px]">
          IMGPP
        </h2>

        <img
          className="pt-24 w-full h-full md:h-[60%] md:w-[60%] object-contain mb-6"
          src={img1}
          alt="Computer"
        />

        <div className="text-center">
          <h2 className="text-[25px] sm:text-[35px] font-bold">Image Processor Pro</h2>
          <p className="text-[16px] sm:text-[20px]">
            Everything you need in an easily customizable dashboard
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center px-6 font-inter">
        <div className="w-full max-w-md">

          <img
            className="w-16 h-16 object-contain pb-8"
            src={logo}
            alt="Logo" />

          <h2 className="text-[32px] font-semibold">Sign in</h2>
          <p className="text-[#9B9B9B] pt-2">
            Welcome back! Please enter your details
          </p>

          <form className="flex flex-col gap-6 py-6">

            {/* Email */}
            <div>
              <h3 className="pb-2 font-medium">Email</h3>
              <input
                className="border w-full rounded-md px-3 py-2 placeholder:text-[#D9D9D9]"
                type="email"
                placeholder="Enter Email"
              />
            </div>

            {/* Password */}
            <div>
              <h3 className="pb-2 font-medium">Password</h3>
              <input
                className="border w-full rounded-md px-3 py-2 placeholder:text-[#D9D9D9]"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            {/* Sign In Button */}
            <button onClick={() => navigate('/table')} className="bg-primary text-white py-3 font-medium rounded-md">
              Sign In
            </button>

            {/* Google Button */}
            <button className="flex items-center justify-center gap-2 border border-[#D9D9D9] rounded-md py-3">
              <img src={googleIcon} alt="Google Icon" />
              <p>Sign in with Google</p>
            </button>

            {/* Create Account */}
            <p className="text-center text-[16px]">
              Need an account?{" "}
              <span className="text-primary cursor-pointer">
                Create an account
              </span>
            </p>

          </form>
        </div>
      </div>

    </section>
  );
};

export default SignIn;

