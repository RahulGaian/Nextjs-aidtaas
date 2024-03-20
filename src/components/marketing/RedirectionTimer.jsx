"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const RedirectTimer = ({ setIsopen }) => {
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  const router = useRouter();
  useEffect(() => {
    // Decrements countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear interval when countdown reaches 0
    if (countdown === 0) {
      clearInterval(timer);
      // Redirect to the desired page
      setIsopen(false);
      router.push("/careerOpenings");
    }

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [countdown]); // useEffect depends on countdown state

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
