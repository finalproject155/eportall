"use client";

import React, { useEffect, useState } from "react";
import { COURSES_DATA } from "./data/data";
import SearchBar from "./components/SearchBar";
import { CircleAlert } from "lucide-react";
import LevelFilterTabs from "./components/LevelFilterTabs";
import CourseTable from "./components/CourseTable";
import SelectedCoursesSidebar from "./components/SelectedCoursesSidebar";

const page = () => {
  const courses = COURSES_DATA;
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("100 Level");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = courses.filter((course) => {
      return (
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredCourses(filtered);
  };

  const onFilterChange = (filter) => {
    setActiveFilter(filter);
    console.log(activeFilter);
  };

  const onToggleCourses = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
    console.log(selectedCourses);
  };

  const handleFilteredCourses = () => {
    const filtered = courses.filter((course) => {
      const courseLevel = `${course.level} Level`;
      return courseLevel === activeFilter;
    });
    setFilteredCourses(filtered);
  };

  useEffect(() => {
    handleFilteredCourses();
  }, [activeFilter]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto w-[80%] mt-20">
        <div className="mb-10">
          <div className="flex-row sm:flex mb-5 justify-between items-center">
            <h1 className="font-bold text-black text-3xl">
              Course Registration
            </h1>
            <p className="flex items-center gap-2 bg-primary/50 px-5 py-3 rounded-md">
              <CircleAlert className="text-primary" />
              Registration is now open
            </p>
          </div>
          <p>
            Select your courses for the upcoming semester. You must select
            between 15 and 21 credit units.
          </p>
        </div>

        <div className="flex-row xl:flex gap-10">
          <div>
            <div className="flex-row sm:flex gap-5 mb-10">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
              <LevelFilterTabs
                activeFilter={activeFilter}
                onFilterChange={onFilterChange}
              />
            </div>

            <CourseTable
              courses={filteredCourses}
              selectedCourses={selectedCourses}
              onToggleCourses={onToggleCourses}
            />
          </div>

          <div>
            <SelectedCoursesSidebar
              selectedCourseIds={selectedCourses}
              allCourses={courses}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
