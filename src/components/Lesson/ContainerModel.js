import React from "react";

const ContainerModel = ({ lesson }) => {
  return (
    <div className="flex w-full justify-center p-4">
      <iframe
        title={lesson.title}
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        width="1080"
        height="480"
        src="https://sketchfab.com/models/9c0359231cf342179543973f0db79857/embed"
      >
        {" "}
      </iframe>{" "}
    </div>
  );
};

export default ContainerModel;
