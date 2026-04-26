import React, { useState } from "react";
import About from "../components/About";
import "../css/EndPage.css";
import { useCharacter } from "../context/CharacterContext";
import fairyEndBtn from "../assets/images/characters/fairy/endBtn.svg";
import elfEndBtn from "../assets/images/characters/elf/endBtn.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EndPage() {
  const { character } = useCharacter();
  const navigate = useNavigate();

  const startOver = () => {
    navigate("/", {
    });
  };

  const characterImg = character === "fairy" ? fairyEndBtn : elfEndBtn;
  return (
    <div>
       <About />
          <p className='opening-title'>לומדת השלמת טירונות חיל חינוך</p>

          <p className='opening-text bold'>אז מה למדנו היום?</p>

          <p className='opening-text regular'>
          למדנו על מבנה חיל החינוך, מגילת צה"ל ורוח צה"ל.
          </p>
          <p className='opening-text regular'>
          כמש"קי חינוך והסברה לעתיד זהו מידע שילווה אותכם בקורס ולאורך השירות.
          </p>
          <p className='opening-text regular'>
          <b>זכרו</b>- תמיד תוכלו לפתוח את הלומדה הזו ולהיזכר אם צריך.
          </p>

          <p className='opening-text bold'>תהנו מהדרך והמון בהצלחה!</p>

          <img src={characterImg} alt="character" className="end-character" onClick={startOver} />
    </div>
  )
}

export default EndPage
