import React from "react";
import Lottie from "react-lottie";
const LottieAnimation = ({ height, width, data }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottieAnimation;
