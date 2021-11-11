import React from "react";
import * as style from "./Styled";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";

const TitleCardComponent = (props) => {
  return (
    <style.TitleCard>
      <style.Panel link={props.link}>
        <style.PanelWrapper>
          <style.TitleInput placeholder="Add board title" />
          <style.MemberWrapper>
            <style.MemberInputWrapper>
              <style.MemberIcon>
                <GroupAddOutlinedIcon fontSize="small" />
              </style.MemberIcon>
              <style.MemberInput placeholder="Add a member" />
            </style.MemberInputWrapper>
            <style.AddButton>
              <AddIcon fontSize="small" />
            </style.AddButton>
          </style.MemberWrapper>
          <style.CloseButton>
            <CloseOutlinedIcon fontSize="1rem" onClick={()=> props.callback()} />
          </style.CloseButton>
        </style.PanelWrapper>
      </style.Panel>
    </style.TitleCard>
  );
};

export default TitleCardComponent;
