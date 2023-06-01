import React from "react";
import { Popover, Button, Typography } from "@mui/material";

const PopoverIcon = ({ open, onClose, anchorEl, onNotInterestedClick }) => {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Typography sx={{ p: 2 }}>
        <button variant="text" onClick={onNotInterestedClick}>Not Interested in this</button>
        <br></br>
        <button variant="text" onClick={onClose}>This is harmful or spammy</button>
      </Typography>
    </Popover>
  );
};

export default PopoverIcon;


// <Button aria-describedby={id} variant="contained" onClick={handleClick}>
//   ...
// </Button>
// <Popover
//   id={id}
//   open={open}
//   anchorEl={anchorEl}
//   onClose={handleClose}
//   anchorOrigin={{
//     vertical: 'bottom',
//     horizontal: 'left',
//   }}
// >
//   <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
// </Popover>