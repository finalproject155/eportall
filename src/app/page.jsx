
import React from "react";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import DegreeProgress from "@/components/dashboard/DegreeProgress";
import QuickLinks from "@/components/dashboard/QuickLinks";
import CurrentCourses from "@/components/dashboard/CurrentCourses";
import Announcements from "@/components/dashboard/Announcements";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";

export default function page() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="w-full mx-auto">
        <WelcomeSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-2 space-y-2">
            <DegreeProgress />
            <QuickLinks />
            <CurrentCourses />
          </div>

          {/* Sidebar Column (Right) */}
          <div className="space-y-6">
            <Announcements />
            <UpcomingDeadlines />
          </div>
        </div>
      </div>
    </div>
  );
}


