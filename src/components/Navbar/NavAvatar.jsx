import React, { useEffect, useState } from "react";

function NavAvatar(props) {
  const className = props.className;

  const [open, setOpen] = useState(false);

  return (
    <div>
      <a onClick={() => setOpen(!open)}>
        <span>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQH_FgH2PtTNHA/company-logo_200_200/0/1528521011260?e=2159024400&v=beta&t=vFYXFGBufJ5JSY4zxOVjQImzLDvRkK8E9xvu538j_CA"
            id={props.id}
            alt={props.alt}
            // style="width: 40px; height: 40px;"
            className={`ml-3 mr-3 md-0 ${className} `}
          />
        </span>
        {open && props.children}
      </a>

      {/* <div
        id="menu-wrapper"
        className={`dropdown-menu dropdown-menu-right shadow`}
        aria-labelledby="dropdownMenu2"
      >
        <div
          id="users-item-wrapper"
          className={`users-dropdown-wrapper dropdown-item py-3`}
        ></div>

        <a
          href="#"
          id="write-post-nav"
          className={`dropdown-item new-view py-2`}
          data-view="newPost"
        >
          Write a post
        </a>

        <a
          href="#"
          id="write-post-nav"
          className={`dropdown-item new-view py-2`}
          data-view="viewUser"
        >
          Settings
        </a>
        <hr />
        <a href="#" className={`dropdown-item py-2`} data-view="home">
          Sign Out
        </a>
      </div> */}
    </div>
  );
}

export default NavAvatar;

{
  /* <div id="menu-wrapper" class="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownMenu2">
                      <div id="users-item-wrapper" class="users-dropdown-wrapper dropdown-item py-3"></div>
                      
                      <a href="#" id="write-post-nav" class="dropdown-item new-view py-2" data-view="newPost">Write a post</a>
                      <!--Podria mostrar la informacion del usuario-->
                      <a href="#" id="write-post-nav" class="dropdown-item new-view py-2" data-view="viewUser">Settings</a>
                      <hr />
                      <a href="#" class="dropdown-item py-2" data-view="home">Sign Out</a> */
}
