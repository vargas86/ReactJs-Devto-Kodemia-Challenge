import React from "react";

function NavIcon(props) {
  const className = props.className;

  return <img className={`${className}`} src={props.src} alt="" srcset="" />;
}

export default NavIcon;
