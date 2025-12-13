import React from "react";

const SelectedCoursesSidebar = ({ selectedCourseIds, allCourses }) => {
  // Filter the full course list to get details for selected IDs
  const selectedCourses = allCourses.filter((course) =>
    selectedCourseIds.includes(course.id)
  );

  // Calculate total units
  const totalUnits = selectedCourses.reduce(
    (sum, course) => sum + course.units,
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-fit w-[320px]">
      <h2 className="font-bold text-lg mb-4">Selected Courses</h2>

      {selectedCourses.length === 0 ? (
        <p className="text-gray-500 text-sm">No courses selected.</p>
      ) : (
        <div className="space-y-4 mb-6">
          {selectedCourses.map((course) => (
            <div
              key={course.id}
              className="flex justify-between items-start text-sm"
            >
              <div>
                <p className="font-bold text-gray-900">{course.code}</p>
                <p className="text-gray-500 text-xs">{course.title}</p>
              </div>
              <span className="font-medium text-gray-700">
                {course.units} Units
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 font-medium">Total Credit Units</span>
          <span className="font-bold text-xl">{totalUnits}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              totalUnits >= 15 && totalUnits <= 21
                ? "bg-green-500"
                : "bg-primary"
            }`}
            style={{ width: `${Math.min((totalUnits / 21) * 100, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mb-6">
          <span>Min: 15 units</span>
          <span>Max: 21 units</span>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg font-medium mb-3 hover:bg-primary-hover transition-colors">
          Submit Registration
        </button>
        <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default SelectedCoursesSidebar;
