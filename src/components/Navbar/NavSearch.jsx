import React from "react";
import { useHistory } from "react-router-dom";


function NavSearch(props) {
  const className = props.className;
 
  return (
    <input
      onChange={props.handleChangeInput}
      type="text"
      placeholder="Search..."
      className={`${className}`} 
    />
  );
}

export default NavSearch;
