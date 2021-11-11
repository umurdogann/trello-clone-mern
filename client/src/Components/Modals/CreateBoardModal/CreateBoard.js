import * as React from "react";
import Modal from "@mui/material/Modal";
import * as style from "./Styled";

import PhotoCardComponent from "./PhotoCardComponent";
import TitleCardComponent from "./TitleCardComponent";
import { useSelector } from "react-redux";

export default function CreateBoard(props) {
  const { backgroundImages, smallPostfix } = useSelector(
    (state) => state.boards
  );
  const [open, setOpen] = React.useState(true);
  const [selectedLink, setSelectedLink] = React.useState(
    backgroundImages[0] + smallPostfix
  );

  const handleSelect = (link) => {
    setSelectedLink(link);
  };
  const handleClose = () => {
    setOpen(false);
    props.callback();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} disableEnforceFocus>
        <style.Container>
          <style.Wrapper>
            <TitleCardComponent link={selectedLink} callback={handleClose} />
            <style.PhotosCard>
              {backgroundImages.map((item, index) => {
                return (
                  <PhotoCardComponent
                    key={index}
                    selectedLink={selectedLink}
                    link={item + smallPostfix}
                    callback={handleSelect}
                  />
                );
              })}
            </style.PhotosCard>
          </style.Wrapper>
          <style.CreateButton>Create board</style.CreateButton>
        </style.Container>
      </Modal>
    </div>
  );
}
