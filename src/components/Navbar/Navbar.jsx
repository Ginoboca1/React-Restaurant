import images from "../../constants/images";
import { useState } from "react";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaList } from "react-icons/fa";

import "../Navbar/Navbar.css";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="navbar-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Awards</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="navbar-log">
        <a href="#">Log In</a>
        <div className="space-bar"></div>
        <a href="#">Book Table</a>
      </div>

      <div className="navbar-smallScreen">
        <FaList color="fff" fontSize={27} onClick={() => setClicked(true)} />

        {clicked && (
          <div className="navbar-smallScreen-overlay flex_center slide-bottom ">
            <MdOutlineRestaurantMenu className="overlay__close" onClick={() => setClicked(false)} />
            <ul className="navbar-menu-smallScreen">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Awards</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
