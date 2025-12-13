import React from "react";
import { FileText, CreditCard, PenTool } from "lucide-react";
import Link from "next/link";

export default function QuickLinks() {
  const links = [
    { name: "View Results", icon: FileText, href: "#" },
    { name: "Make a Payment", icon: CreditCard, href: "#" },
    { name: "Register Courses", icon: PenTool, href: "/course-registration" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="bg-blue-50 p-3 rounded-full mb-3 text-primary">
              <link.icon size={24} />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
