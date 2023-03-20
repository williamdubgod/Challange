import React from "react";

export default function Menu({ open }) {
    
  return (
    <React.Fragment>
      <span className={open ? "rotate fa fa-chevron-down" : "fa fa-chevron-right"}></span>
    </React.Fragment>
  );
}