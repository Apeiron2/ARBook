import Lesson from "@/components/Lesson/Lesson";
import { LessonManager } from "@/utils/excute";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const lessonManager = new LessonManager();
  await lessonManager.loadData();
  const lessonData = await lessonManager.findLessonByNo(id);

  return (
    <div
      className={
        "w-full h-full flex justify-center md:justify-end bg-[url('" +
        lessonData.backgroundUrl +
        "')] bg-auto p-4"
      }
    >
      <Lesson lesson={lessonData} />
    </div>
  );
};

export default page;
