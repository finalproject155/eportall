import React from 'react';

export default function Announcements() {
  const announcements = [
    { date: 'MAR 28, 2024', title: 'Mid-term Exam Schedule Released' },
    { date: 'MAR 25, 2024', title: 'Campus Library Hours Extended' },
    { date: 'MAR 22, 2024', title: 'Spring Fest Registrations Open' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((item, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
            <p className="text-xs font-semibold text-gray-500 mb-1 uppercase">{item.date}</p>
            <p className="text-sm font-medium text-gray-900">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
