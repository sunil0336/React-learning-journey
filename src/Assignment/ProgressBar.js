import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
      <div
        className="bg-green-500 h-full text-white text-sm font-semibold flex items-center justify-center transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
