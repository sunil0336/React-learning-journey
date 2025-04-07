import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

function Pbar() {
  const [progress, setProgress] = useState(0);

  // Simulate progress increase
  useEffect(() => {

    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : prev));
    }, 1000);
    
    return () => clearInterval(timer);

  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-20 bg-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-4">Custom Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default Pbar;
