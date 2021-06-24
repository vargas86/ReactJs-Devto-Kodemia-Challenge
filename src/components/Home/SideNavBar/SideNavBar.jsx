import React from 'react'

function SideNavBar(props) {
  return (
    <>

        <li className={`${props.activeClass}`} >
            <a href="">
                <img src={ props.imageUrl } /> 
                    { props.liName }
                <span className="sr-only">
                    { props.spanContent }
                </span>
            </a>
        </li>

    </>
  );
}

export default SideNavBar;