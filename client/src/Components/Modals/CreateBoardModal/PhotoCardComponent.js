import React from "react";
import * as style from "./Styled";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const PhotoCardComponent = (props) => {
  const { link, selectedLink, callback } = props;
  console.log("link", link);
  console.log("selectedImg", selectedLink);
  return (
    <style.PhotoWrapper link={link} onClick={() => callback(link)}>
      <style.Photo show={selectedLink === link}>
        <style.DoneIconWrapper show={selectedLink === link}>
          <DoneRoundedIcon fontSize="0.1rem" />
        </style.DoneIconWrapper>
      </style.Photo>
    </style.PhotoWrapper>
  );
};

export default PhotoCardComponent;
