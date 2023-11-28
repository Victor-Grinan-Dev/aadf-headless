import React from "react";

const NavBtn = (props) => {
  const { name } = props;
  return (
    <button class="navBtn" role="button">
      {name}
    </button>
  );
};

export default NavBtn;
