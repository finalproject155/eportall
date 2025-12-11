import React from "react";
import WelcomeSection from "@/app/(root)/dashboard/components/WelcomeSection";
import DegreeProgress from "@/app/(root)/dashboard/components/DegreeProgress";
import QuickLinks from "@/app/(root)/dashboard/components/QuickLinks";
import CurrentCourses from "@/app/(root)/dashboard/components/CurrentCourses";
import Announcements from "@/app/(root)/dashboard/components/Announcements";
import UpcomingDeadlines from "@/app/(root)/dashboard/components/UpcomingDeadlines";

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

