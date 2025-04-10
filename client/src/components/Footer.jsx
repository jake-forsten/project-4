import React from "react";
import Logo2 from "../img/footlogo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo2} alt="" />
      <span>
        The place for all things guitar. Made with <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
