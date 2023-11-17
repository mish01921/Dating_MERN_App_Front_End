import React from "react";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from '@mui/icons-material/Forum';
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="header" />
      </IconButton>
    </div>
  );
};
export default Header;
