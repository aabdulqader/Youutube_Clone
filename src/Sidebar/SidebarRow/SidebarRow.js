import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ selected, title, Icon }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <p className="sidebarRow__title">{title}</p>
    </div>
  );
};

export default SidebarRow;
