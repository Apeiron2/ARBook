import React from "react";
import Image from "next/image";
const TopicList = ({ topics }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="flex bg-white shadow-md rounded-lg overflow-hidden p-4 w-[48rem]"
        >
          <div className="relative flex max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-md">
              <Image
                src={topic.image}
                alt="ui/ux review check"
                className="w-full h-48 rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="block font-sans font-semibold leading-snug tracking-normal text-black antialiased">
                {topic.title}
              </h2>
              <p className="mt-3 block font-sans font-normal leading-relaxed text-black antialiased">
                Because it's about motivating the doers. Because I'm here to
                follow my dreams and inspire others.
              </p>
            </div>
          </div>
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
