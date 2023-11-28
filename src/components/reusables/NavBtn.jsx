import React from "react";

const NavBtn = (props) => {
  const { name } = props;
  return <button class="navBtn">{name}</button>;
};

export default NavBtn;
