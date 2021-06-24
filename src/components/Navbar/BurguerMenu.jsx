import React from "react";
import { useHistory } from "react-router";

function BurguerMenu(props) {
  const className = props.className;
  const history = useHistory();
  return (
    <div>
      <a onClick={() => history.push("/write-post")} className={`${className}`}>
        <span>
          <img src={props.src} />
        </span>
        {props.text}
      </a>
    </div>
  );
}

export default BurguerMenu;
