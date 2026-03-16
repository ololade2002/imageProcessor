import React from "react";
import searchIcon from '../assets/searchIcon.png'
import arrow from '../assets/arrowDown.png'
import editIcon from '../assets/editicon.png'
import copyIcon from '../assets/copyIcon.png'
import deleteIcon from '../assets/deleteIcon.png'

const data = [
  { sn: "01", type: "Banner",          width: "259px", height: "400px", size: "4mb",  date: "20-01-2023", apiKey: "xrtfbyur0824803184thb..." },
  { sn: "02", type: "Header",          width: "268px", height: "360px", size: "3mb",  date: "16-01-2023", apiKey: "ktdfbvbj4694803914hpd..." },
  { sn: "03", type: "Avatar",          width: "140px", height: "265px", size: "2mb",  date: "07-01-2023", apiKey: "gffanvbr0698817284hfd..." },
  { sn: "04", type: "Product picture", width: "263px", height: "320px", size: "5mb",  date: "02-01-2023", apiKey: "trhfmiyr8794925084hfd..." },
];

const ImageTable = () => {
  return (
    <div className="p-6 bg-white font-inter rounded-xl shadow-sm">

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 w-full max-w-130">
          <img src={searchIcon} alt="Icon"/>
          <input
            type="text"
            placeholder="Search for image type, name or something"
            className="outline-none text-sm text-gray-500 w-full placeholder:text-gray-400"
          />
        </div>

        <button className="hidden md:flex items-center gap-2 border border-primary text-primary text-sm font-medium px-5 py-2 rounded-md hover:bg-blue-50 transition-all ml-4">
          Filter By
          <img src={arrow} alt="Arrow Down"/>
        </button>
      </div>

      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-200 text-sm">
          <thead>
            <tr className="text-[#084074] text-left">
              <th className="pb-4 font-semibold w-8"></th>
              <th className="pb-4 font-semibold">S/N</th>
              <th className="pb-4 font-semibold">Image Type</th>
              <th className="pb-4 font-semibold">Width(px)</th>
              <th className="pb-4 font-semibold">Height(px)</th>
              <th className="pb-4 font-semibold">Size(mb)</th>
              <th className="pb-4 font-semibold">Date Modified</th>
              <th className="pb-4 font-semibold">API Key</th>
              <th className="pb-4"></th>
              <th className="pb-4"></th>
              <th className="pb-4"></th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-5 pr-2">
                  <input type="checkbox" className="w-4 h-4 accent-primary cursor-pointer" />
                </td>
                <td className="py-5 pr-6 text-black">{row.sn}</td>
                <td className="py-5 pr-6 text-black font-medium">{row.type}</td>
                <td className="py-5 pr-6 text-black">{row.width}</td>
                <td className="py-5 pr-6 text-black">{row.height}</td>
                <td className="py-5 pr-6 text-black">{row.size}</td>
                <td className="py-5 pr-6 text-black">{row.date}</td>

                {/* API Key */}
                <td className="py-5 pr-3">
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                    <span className="text-[#084074] text-xs truncate max-w-40">{row.apiKey}</span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
                      <img src={copyIcon} alt="Copy Icon"/>
                    </button>
                  </div>
                </td>

                {/* Validate */}
                <td className="py-5 pr-3">
                  <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-all active:scale-[0.97]">
                    Validate
                  </button>
                </td>

                {/* Edit */}
                <td className="py-5 pr-3">
                  <button className="text-gray-700 hover:text-gray-900 transition-colors">
                    <img src={editIcon} alt="Edit"/>
                  </button>
                </td>

                {/* Delete */}
                <td className="py-5">
                  <button className="text-red-400 hover:text-red-600 transition-colors">
                    <img src={deleteIcon} alt="Delete"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ImageTable;