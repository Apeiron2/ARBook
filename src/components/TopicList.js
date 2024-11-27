import React from "react";
import Link from "next/link";
const topics = [
  {
    title: "Hệ Mặt Trời",
    description:
      "Với tính năng Thực Tế Tăng Cường (AR) tích hợp, bạn có thể tương tác với mô hình 3D của các hành tinh ngay trên bàn học.",
    image: "https://apeironsepdhust.io.vn/uploads/planets-solar-system.png", // Thay bằng URL hình ảnh thực tế
  },
  {
    title: "Cơ Thể Con Người",
    description:
      "Quan sát mô hình 3D của cơ thể người một cách chi tiết, từ hệ cơ xương đến mạch máu và nội tạng.",
    image:
      "https://apeironsepdhust.io.vn/uploads/optician-oculist-woman-tells-about-structure-eye.png", // Thay bằng URL hình ảnh thực tế
  },
];
const TopicList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      {topics.map((topic, index) => (
        <div key={index} className="flex rounded-lg overflow-hidden p-4">
          <Link
            href={"/home"}
            className="relative flex flex-col rounded-xl bg-white bg-clip-border text-black shadow-md"
          >
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-black shadow-md">
              <img
                src={topic.image}
                alt="ui/ux review check"
                className="max-w-[24rem] h-40 rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="block font-sans font-semibold leading-snug tracking-normal text-black antialiased">
                {topic.title}
              </h2>
            </div>
          </Link>
          <div className="w-full pt-5 px-4 mb-8 mx-auto ">
            <div className="text-sm text-gray-700 py-1">
              <a className="text-black font-semibold" href="/" target="_blank">
                {topic.title}
              </a>{" "}
              <br />
              <a
                href="https://www.creative-tim.com?ref=tailwindcomponents"
                className="text-black"
                target="_blank"
              >
                {" "}
                {topic.description}
              </a>
              .
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
