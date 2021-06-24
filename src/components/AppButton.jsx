import React from "react";
import { useHistory } from "react-router";

function AppButton(props) {
  const className = props.className ? props.className : " ";
  const history = useHistory();
  if (props.type === "anchor") {
    return (
      <a
        onClick={() => history.push("/write-post")}
        className={`btn btn-link  ${className}`}
      >
        {props.text}{" "}
      </a>
    );
  }

  return (
    <button className={`btn btn button-post ${className}`} type="button">
      {props.text}
    </button>
  );
}

export default AppButton;
