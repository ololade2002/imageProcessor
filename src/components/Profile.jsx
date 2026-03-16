import React from "react";
import profilePic from "../assets/Frame 3.png";
import Navbar from "./Navbar";
import righticon from '../assets/rightIcon.png'
import { useNavigate } from "react-router";

const Profile = () => {
    const navigate = useNavigate()
  return (
    <section className="bg-neutral-100">
     <Navbar/>

    <div className="px-4 md:px-12 py-3">
         <img onClick={() => navigate('/table')} className="w-10 h-10" src={righticon} alt="icon"/>
    </div>

    
<div className="bg-white w-[94%] mx-auto">
         <div className="px-4 py-4 md:px-12">
       <h2 className="font-bold text-[22px] mb-4">My Profile</h2>
       <hr className="border-gray-200 mb-6" />
     </div>

      {/* Profile Banner */}
      <div  className="flex items-center  mx-auto w-[94%] gap-6 px-4 md:px-12 py-6 font-inter rounded-tl-4xl rounded-br-4xl mb-10"  style={{ background: "linear-gradient(150.67deg, #2D90EC 93.46%, rgba(59, 100, 137, 0) 98.45%)" }}>        
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover  shadow-md" />
        <div>
          <h3 className="text-white font-bold text-[24px]">John Doe</h3>
          <p className="text-white/80 text-[16px]">Payarena</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col pb-7 px-4 md:px-12 gap-6">

        {/* Row 1 — Name & Business Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium text-sm">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium text-sm">Business Name</label>
            <input
              type="text"
              placeholder="Payarena"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Row 2 — Email & Gender */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium text-sm">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium text-sm">Gender</label>
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all bg-white cursor-pointer">
                <option value="">Male</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Row 3 — Phone Number (half width) */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium text-sm">Phone Number</label>
            <input
              type="tel"
              placeholder="123 456 7890"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          {/* Empty spacer to keep half-width layout */}
          <div className="flex-1 hidden md:block" />
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="px-16 py-3.5 rounded-md text-white text-sm font-medium transition-all active:scale-[0.98] hover:opacity-90"
            style={{ background: "linear-gradient(150.67deg, #2D90EC 93.46%, rgba(59, 100, 137, 0) 98.45%)" }}
          >
            Save Changes
          </button>
        </div>

      </div>
</div>

    </section>
  );
};

export default Profile;