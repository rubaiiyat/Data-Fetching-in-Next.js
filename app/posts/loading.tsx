import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex w-96 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-32 w-32 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    </div>
  );
};

export default loading;
