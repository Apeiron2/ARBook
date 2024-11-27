"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";

const VerticalMenu = ({ selected, setSelected }) => {
  return (
    <div className="md:fixed flex justify-between right-4 left-4 md:flex-col md:top-1/2 md:right-auto transform -translate-y-1/2 bg-red-600 rounded-lg shadow-lg overflow-hidden">
      <Link
        href=""
        className={clsx(
          "flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg  hover:bg-white hover:text-red-600 w-1/4 md:w-auto",
          selected === 0 ? "bg-white text-red-600" : "text-white"
        )}
        onClick={() => setSelected(0)}
      >
        <i className="fas fa-file-alt text-2xl"></i>
        <span className="text-sm mt-1">Nội dung</span>
      </Link>
      <Link
        href=""
        className={clsx(
          "flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg  hover:bg-white hover:text-red-600 w-1/4 md:w-auto",
          selected === 1 ? "bg-white text-red-600" : "text-white"
        )}
        onClick={() => setSelected(1)}
      >
        <i className="fas fa-robot text-2xl"></i>
        <span className="text-sm mt-1">Mô hình</span>
      </Link>
      <Link
        href=""
        className={clsx(
          "flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg  hover:bg-white hover:text-red-600 w-1/4 md:w-auto",
          selected === 2 ? "bg-white text-red-600" : "text-white"
        )}
        onClick={() => setSelected(2)}
      >
        <i className="fas fa-edit text-2xl"></i>
        <span className="text-sm mt-1">Bài tập</span>
      </Link>
      <Link
        href=""
        className={clsx(
          "flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg  hover:bg-white hover:text-red-600 w-1/4 md:w-auto",
          selected === 3 ? "bg-white text-red-600" : "text-white"
        )}
        onClick={() => setSelected(3)}
      >
        <i className="fas fa-crosshairs text-2xl"></i>
        <span className="text-sm mt-1">AR</span>
      </Link>
    </div>
  );
};

export default VerticalMenu;
