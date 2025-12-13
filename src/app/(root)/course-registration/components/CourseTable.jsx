import React from "react";
import CourseRow from "./CourseRow";

const CourseTable = ({ courses, selectedCourses, onToggleCourses }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="w-16 px-6 py-4">
                <span className="sr-only">Select</span>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Code
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Title
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Units
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                isSelected={selectedCourses.includes(course.id)}
                onToggle={onToggleCourses}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
