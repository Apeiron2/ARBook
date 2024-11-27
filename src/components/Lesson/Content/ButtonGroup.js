import clsx from "clsx";
import React from "react";

const ButtonGroup = ({ sections, selectedSection, onSelectedSection }) => {
  return (
    <div className="pt-5 pb-8">
      <div className="container">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center overflow-hidden rounded-lg border border-stroke">
            {sections.map((section, index) => (
              <button
                key={index}
                className={clsx(
                  "border-r border-stroke px-4 py-3 text-base last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary",
                  index === selectedSection
                    ? " text-red-600 roboto-bold"
                    : "text-dark roboto-regular"
                )}
                onClick={() => {
                  onSelectedSection(index);
                }}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
