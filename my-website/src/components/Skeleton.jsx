import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="w-full h-16 bg-gray-300 animate-pulse mb-6"></div>

      <div className="flex flex-col items-center mb-6 px-4">
        <div className="h-12 w-3/4 md:w-1/2 bg-gray-300 rounded mb-4 animate-pulse"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mb-10 px-4 gap-4">
        <div className="h-12 w-full sm:w-64 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-12 w-12 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="flex justify-start px-10 mb-4">
        <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="bg-gray-200 animate-pulse rounded-lg p-4 grid grid-cols-3 gap-6">
        <div className="w-full h-48 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-48 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-48 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-48 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-48 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-48 bg-gray-300 rounded-md mb-2"></div>
      </div>
    </>
  );
};

export default Skeleton;
