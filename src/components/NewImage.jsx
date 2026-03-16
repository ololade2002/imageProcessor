import React from "react";
import close from '../assets/closeicon.png'
import { useNavigate } from "react-router";

const NewImage = () => {
  const navigate = useNavigate()

  return (
    <section className="px-4 md:px-12 py-4 font-inter">
      <div className="flex flex-row justify-between items-center border-b border-b-gray-300 pb-2">
        <h2 className="font-bold text-[22px]">Image Details</h2>
        <img onClick={() => navigate('/table')} src={close} alt="closeIcon" className="cursor-pointer" />
      </div>

      <div className="flex py-8 flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        <form className="flex flex-1 w-full flex-col gap-6 py-6">

          {/* Image Type — no unit suffix */}
          <div className="">
            <h3 className="pb-2 font-medium">Image Type</h3>
            <input
              className="border w-full border-[#00000040] rounded-md px-3 py-2 placeholder:text-black"
              type="text"
              placeholder="Banner"
            />
          </div>

          {/* Width */}
          <div>
            <h3 className="pb-2 font-medium">Width (px)</h3>
            <div className="relative">
              <input
                className="border w-full border-[#00000040] rounded-md px-3 py-2 pr-12 placeholder:text-black"
                type="text"
                placeholder="250"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                px
              </span>
            </div>
          </div>

          {/* Height */}
          <div>
            <h3 className="pb-2 font-medium">Height (px)</h3>
            <div className="relative">
              <input
                className="border w-full border-[#00000040] rounded-md px-3 py-2 pr-12 placeholder:text-black"
                type="text"
                placeholder="300"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                px
              </span>
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="pb-2 font-medium">Size (mb)</h3>
            <div className="relative">
              <input
                className="border w-full border-[#00000040] rounded-md px-3 py-2 pr-12 placeholder:text-black"
                type="text"
                placeholder="4"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                mb
              </span>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="w-full py-3 rounded-md text-white text-sm font-medium transition-all active:scale-[0.98]"
            style={{ background: 'linear-gradient(150.67deg, #2D90EC 93.46%, rgba(59, 100, 137, 0) 98.45%)' }}
          >
            Save To Generate Key
          </button>

        </form>

        <div className="flex-1 flex w-full flex-col gap-5">
          <h2>API Key</h2>
          <div className="bg-[#0840740D] text-[#8C8C8C] text-center px-4 py-6 rounded-md">
            API Key not generated yet
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewImage;