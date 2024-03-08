import React, { useState, useEffect } from "react";

const RedirectTimer = () => {
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  useEffect(() => {
    // Decrements countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear interval when countdown reaches 0
    if (countdown === 0) {
      clearInterval(timer);
      // window.location = "/"
      window.location = "/careeropenings";
    }

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div>
      {countdown > 0 ? (
        <p>Redirecting In: {countdown}</p>
      ) : (
        <p>Redirecting..........</p>
      )}
    </div>
  );
};

export default RedirectTimer;
