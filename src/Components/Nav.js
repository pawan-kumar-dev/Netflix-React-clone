import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <a href="/">
        <img
          src="https://vignette.wikia.nocookie.net/dynastytv/images/5/54/Netflix_logo.png/revision/latest?cb=20171022162747"
          className="nav__logo"
          alt="logo"
        />
      </a>

      <a
        href="https://github.com/pawan-kumar-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
          className="nav__avatar"
        />
      </a>
    </div>
  );
};

export default Nav;
