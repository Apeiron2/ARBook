import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Content from "./Content";

const ContainerContent = ({ lesson }) => {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <>
      <ButtonGroup
        sections={lesson.sections}
        selectedSection={selectedSection}
        onSelectedSection={setSelectedSection}
      />
      <Content
        content={lesson.sections[selectedSection].content}
        img={lesson.sections[selectedSection].img}
      />
    </>
  );
};

export default ContainerContent;
