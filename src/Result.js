import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Your final score is {score}!
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Results;
