import React from "react";

const ContainerEx = ({ lesson }) => {
  return (
    <iframe
      title={lesson.title}
      allowFullScreen
      allow="autoplay; fullscreen; xr-spatial-tracking"
      className="w-full h-screen mt-5"
      zoom="2.00"
      src="https://apeironsepdhust.io.vn/uploads/pdf/TomTat.pdf"
    ></iframe>
  );
};

export default ContainerEx;
