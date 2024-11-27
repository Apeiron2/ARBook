"use client";
import React, { useState } from "react";
import LessonMenu from "./LessonMenu";
import ContainerContent from "./Content/ContainerContent";
import ContainerModel from "./ContainerModel";
import ContainerAR from "./ContainerAR";
import ContainerEx from "./ContainerEx";

const Lesson = ({ lesson }) => {
  const [selectedModule, setSelectedModule] = useState(0);

  return (
    <div className="lesson flex flex-col md:flex-row w-full md:w-4/5 h-full mt-5 bg-white p-5 rounded-md shadow-md">
      <LessonMenu selected={selectedModule} setSelected={setSelectedModule} />
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-xl roboto-bold text-gray-700 mb-3">
            {lesson.title}
          </h1>
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-circle-info text-blue-400"></i>
            <p> Nội dung được lấy từ sách .....</p>
          </div>
        </div>
        {selectedModule === 0 && <ContainerContent lesson={lesson} />}
        {selectedModule === 1 && <ContainerModel lesson={lesson} />}
        {selectedModule === 2 && <ContainerEx lesson={lesson} />}
        {selectedModule === 3 && <ContainerAR lesson={lesson} />}
      </div>
    </div>
  );
};

export default Lesson;
