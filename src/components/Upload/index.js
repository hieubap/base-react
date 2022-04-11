import React from "react";
import { StyledUpload } from "./styled";

const Upload = ({
  className = "",
  idUpload = "input-image",
  accept = ".jpg,.png,.jpeg",
}) => {
  return (
    <StyledUpload className={className}>
      <input
        id={idUpload}
        type="file"
        accept={accept}
        onChange={(e) => {
          console.log(e.target?.files);
          //   fileProvider.upload(e.target?.files[0]).then((res) => {
          //     if (res && res.code === 0) {
          //       setState({ imgPath: res.data?.filePath });
          //     }
          //   });
        }}
        style={{ display: "none" }}
      />
      <label htmlFor={idUpload} className="icon-upload">
        <i className="icon-upload-img fa fa-image"></i>
      </label>
    </StyledUpload>
  );
};

export default Upload;
