import Link from "next/link";
import React from "react";

const Item = async ({ Item }) => {
  return (
    <div className="flex items-center justify-between bg-[#F5F5F566] py-3 px-4 shadow-md my-1">
      <div className="flex items-center gap-4">
        <i className="fa-solid fa-file-lines text-black"></i>
        <Link href={`/lesson/${Item.no}`} className="text-red-600 roboto-bold">
          Bài số {Item.no}: {Item.title}
        </Link>
      </div>
      <div className="flex items-center">
        <i className="fa-solid fa-circle-info"></i>
      </div>
    </div>
  );
};

const ListItem = ({ lessons }) => {
  return (
    <div>
      {lessons.map((lesson, index) => (
        <Item key={index} Item={lesson} />
      ))}
    </div>
  );
};

export default ListItem;
