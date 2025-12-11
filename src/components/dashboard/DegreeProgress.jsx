import React from 'react';

export default function DegreeProgress() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Degree Progress</h2>
        <span className="text-sm font-medium text-gray-500">75%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
        <div 
          className="bg-primary h-2.5 rounded-full" 
          style={{ width: '75%' }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 font-medium">120/160 Credits Earned</p>
    </div>
  );
}
