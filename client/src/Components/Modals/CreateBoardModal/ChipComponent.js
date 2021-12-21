import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const useStyles = makeStyles({
  root: {
    maxWidth: "8rem",
    opacity: "70%",
  },
});

const ChipComponent = (props) => {
  const { name, surname, email, callback } = props;
  const classes = useStyles();
  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={`${name} ${surname}`}
      size="small"
      placement="top"
      arrow
    >
      <Chip
        className={classes.root}
        onDelete={() => callback(email)}
        avatar={<Avatar>{name.toString()[0]}</Avatar>}
        label={name}
        size="small"
        color="secondary"
      />
    </Tooltip>
  );
};

export default ChipComponent;
