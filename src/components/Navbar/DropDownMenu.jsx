import React from "react";
import { useHistory } from "react-router";

function DropDownMenu() {
  function DropDownItem(props) {
    const history = useHistory();
    if (props.children === "Create post")
      return (
        <a
          href="#"
          className="menu-item"
          onClick={() => history.push("/write-post")}
        >
          <span className=""></span>
          {props.children}

          <span className=""></span>
        </a>
      );

    return (
      <a href="#" className="menu-item">
        <span className=""></span>
        {props.children}
        <span className=""></span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropDownItem>User</DropDownItem>
      <DropDownItem>@User</DropDownItem>
      <DropDownItem>Create post</DropDownItem>
    </div>
  );
}

export default DropDownMenu;
