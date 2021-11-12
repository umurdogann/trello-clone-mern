import React, { useEffect, useState } from "react";
import * as style from "./Styled";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { getUserFromEmail } from "../../../Services/userService";
import ChipComponent from "./ChipComponent";

const TitleCardComponent = (props) => {
  const dispatch = useDispatch();
  const { updateback, link } = props;
  const [memberInput, setMemberInput] = useState("");
  const [members, setMembers] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    updateback({
      title: title,
      backgroundImageLink: link,
      members: members,
    });
  }, [updateback, title, members, link]);

  const handleClick = async () => {
    const newMember = await getUserFromEmail(memberInput, dispatch);
    if (newMember == null) return;
    if (members.filter((member) => member.email === newMember.email).length > 0)
      return;

    setMembers([...members, newMember]);
  };

  const handleDelete = (email) => {
    const newMembers = members.filter((member) => member.email !== email);
    setMembers([...newMembers]);
  };

  return (
    <style.TitleCard>
      <style.Panel link={props.link}>
        <style.PanelWrapper>
          <style.TitleInput
            placeholder="Add board title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <style.MemberWrapper>
            <style.MemberInputWrapper>
              <style.MemberIcon>
                <GroupAddOutlinedIcon fontSize="small" />
              </style.MemberIcon>
              <style.MemberInput
                placeholder="Invite to board with email"
                value={memberInput}
                type="email"
                onChange={(e) => setMemberInput(e.target.value)}
              />
            </style.MemberInputWrapper>
            <style.AddButton onClick={() => handleClick()}>
              <AddIcon fontSize="small" />
            </style.AddButton>
          </style.MemberWrapper>
          <style.CloseButton>
            <CloseOutlinedIcon
              fontSize="1rem"
              onClick={() => props.callback()}
            />
          </style.CloseButton>
        </style.PanelWrapper>
        <style.ChipWrapper>
          {members.map((member) => {
            return (
              <ChipComponent
                key={member.email}
                callback={handleDelete}
                {...member}
              />
            );
          })}
        </style.ChipWrapper>
      </style.Panel>
    </style.TitleCard>
  );
};

export default TitleCardComponent;
