import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="absolute inset-0 bg-white/20 flex items-center justify-center backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingIndicator;
