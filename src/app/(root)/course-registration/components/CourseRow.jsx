import React from "react";

const CourseRow = ({ course, isSelected, onToggle }) => {
  return (
    <tr
      className={`group transition-all duration-200 hover:bg-gray-50/80 cursor-pointer ${
        isSelected ? "bg-blue-50/60" : "bg-white"
      }`}
      onClick={() => onToggle(course.id)}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle(course.id)}
            className={`
              w-5 h-5 rounded border-gray-300 transition-colors cursor-pointer
              focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0
              ${
                isSelected
                  ? "bg-blue-600 border-blue-600 text-blue-600"
                  : "bg-white"
              }
            `}
          />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="font-bold text-gray-900">{course.code}</span>
      </td>
      <td className="px-6 py-4">
        <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
          {course.title}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {course.units} Units
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
            {course.instructor.charAt(0)}
          </div>
          {course.instructor}
        </div>
      </td>
    </tr>
  );
};

export default CourseRow;
