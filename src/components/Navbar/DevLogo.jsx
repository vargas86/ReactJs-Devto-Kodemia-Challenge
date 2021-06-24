import React from "react";
import { useHistory } from "react-router";

// class DevLogo extends React.Component {
//   render() {
//     return <h1 className="text-uppercase">dev</h1>;
//   }
// }

// export default DevLogo;

function DevLogo(props) {
  const className = props.className;
  const history = useHistory();

  return (
    <a onClick={() => history.push("/")}>
      <h1 className={`${className}`}>DEV</h1>
    </a>
  );
}

export default DevLogo;
