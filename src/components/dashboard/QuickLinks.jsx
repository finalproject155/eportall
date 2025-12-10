import React from 'react';
import { FileText, CreditCard, PenTool } from 'lucide-react';

export default function QuickLinks() {
  const links = [
    { name: 'View Results', icon: FileText },
    { name: 'Make a Payment', icon: CreditCard },
    { name: 'Register Courses', icon: PenTool }, // Using PenTool as a placeholder for registration
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <button 
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="bg-blue-50 p-3 rounded-full mb-3 text-primary">
              <link.icon size={24} />
            </div>
            <span className="text-sm font-semibold text-gray-700">{link.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
