import React from "react";

const LevelFilterTabs = ({ activeFilter, onFilterChange }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["100 Level", "200 Level", "300 Level", "400 Level", "500 Level"].map(
          (level) => (
            <button
              className={`px-5 py-2 rounded-md ${
                activeFilter === level ? "bg-primary text-white" : "bg-white"
              }`}
              key={level}
              onClick={() => onFilterChange(level)}
            >
              {level}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default LevelFilterTabs;
