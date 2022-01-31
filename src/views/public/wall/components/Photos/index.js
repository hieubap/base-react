import WidgetHeader from "components/WidgetHeader";
import React from "react";

const Photos = ({ photoList, title }) => {
  return (
    <div className="gx-entry-sec">
      <WidgetHeader title={title} />

      <ul className="gx-gallery-list">
        {photoList.map((photo, index) => (
          <li key={index}>
            <img alt="..." src={photo.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Photos;
