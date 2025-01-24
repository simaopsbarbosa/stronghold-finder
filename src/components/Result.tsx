import React from "react";

interface ResultProps {
  message: string;
}

const Result: React.FC<ResultProps> = ({ message }) => {
  return (
    <div className="flex justify-center mt-4 p-4">
      <div className="w-auto rounded-lg border border-neutral-700 bg-purple-600 bg-opacity-15 p-6">
        <h1 className="text-center text-2xl text-zinc-100">{message}</h1>
      </div>
    </div>
  );
};

export default Result;