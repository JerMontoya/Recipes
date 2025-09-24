import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto animate-pulse">
      <div className="w-full h-16 bg-gray-300 animate-pulse mb-6"></div>

      <div className="w-full h-64 bg-gray-300 rounded-md mb-4"></div>

      <div className="h-8 w-3/4 bg-gray-300 rounded mb-2"></div>

      <div className="h-6 w-1/2 bg-gray-300 rounded mb-4"></div>

      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
        ))}
      </div>

      <div className="mt-6 space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
