import React, { useState, useEffect } from 'react';
import "./index.css"
const ProgressBar = ({ totalTimeInSeconds }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let startTime = Date.now();

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progressPercentage = (elapsedTime / (totalTimeInSeconds * 1000)) * 100;

      // Ensure the progress doesn't exceed 100%
      setProgress(Math.min(progressPercentage, 100));

      if (progressPercentage >= 100) {
        clearInterval(interval);
      }
    };

    interval = setInterval(updateProgress, 1); // Update progress every 100 milliseconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [totalTimeInSeconds]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
