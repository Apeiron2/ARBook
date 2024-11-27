import React from "react";

const Content = ({ content, img }) => {
  return (
    <div className="content flex gap-10 items-center flex-col lg:flex-row">
      <p className="w-1/2">{content}</p>
      <img src={img} alt="Ảnh minh họa" className="w-1/2" />
    </div>
  );
};

export default Content;
