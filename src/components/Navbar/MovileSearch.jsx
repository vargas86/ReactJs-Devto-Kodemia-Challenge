import React from "react";
import { useHistory } from "react-router-dom";

function MovileSearch(props) {
  const className = props.className;
  const history = useHistory();
  return (
    <a
      className={`${className}`}
    >
      <img className={`mr-3`} src={props.src} />
    </a>
  );
}

export default MovileSearch;
