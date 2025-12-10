import React from 'react';

export default function CurrentCourses() {
  const courses = [
    { code: 'CS-201', name: 'Data Structures', professor: 'Prof. Ada Lovelace' },
    { code: 'MA-305', name: 'Linear Algebra', professor: 'Prof. Carl Gauss' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">My Current Courses</h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-900">{course.code}: {course.name}</p>
              <p className="text-sm text-gray-500">{course.professor}</p>
            </div>
            <button className="text-sm font-medium text-primary hover:text-primary-hover">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
