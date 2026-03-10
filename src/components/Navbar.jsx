import React, { useState } from "react";
import "../css/Navbar.css";
import navbarIcon from "../assets/images/navbar/navbarIcon.png";

function Navbar(props) {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const subjArr = [
    "מבוא",
    "הכירו את חיל החינוך",
    'רוח צה"ל',
    'מגילת צה"ל',
  ];
  const subjNum = props.subjNum;
  return (
    <>
      <div className="phone-navbar">
        <div className="the-stripe-topic">
          <p className="subj-text">{subjArr[subjNum]}</p>
        </div>

<div
  className={`light-blue-circle ${showPhoneMenu ? "pop-out-menu" : ""}`}
>

  <img
    className={`menu-icon ${showPhoneMenu ? "open" : ""}`}
    src={navbarIcon}
    alt="menu-icon"
    onClick={() => setShowPhoneMenu(!showPhoneMenu)}
  />

  {showPhoneMenu && (
    <div className="menu-container">
      <p
        className="close-btn"
        onClick={() => setShowPhoneMenu(false)}
      >
        x
      </p>
    </div>
  )}

</div>
      </div>
    </>
  );
}

export default Navbar;
