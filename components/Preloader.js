import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Preloader;
