import React from "react";
import About from "../components/About";
import "../css/EndPage.css";
import { useCharacter } from "../context/CharacterContext";
import { useLearningProgress } from "../context/LearningProgressContext";

import fairyEndBtn from "../assets/images/characters/fairy/endBtn.svg";
import elfEndBtn from "../assets/images/characters/elf/endBtn.svg";

import { useNavigate } from "react-router-dom";

function EndPage() {
  const { character } = useCharacter();
  const { resetLearningProgress } = useLearningProgress();
  const navigate = useNavigate();

  // 🔁 התחלה מחדש (מאפס הכל)
  const startOver = () => {
    resetLearningProgress(); // 🔥 איפוס הלומדה
    navigate("/");
  };

  // 🔙 חזרה ללומדה (בלי איפוס)
  const backToLomda = () => {
    navigate("/content");
  };

  const characterImg = character === "fairy" ? fairyEndBtn : elfEndBtn;

  return (
    <div>
      <About />

      <p className="opening-title">לומדת השלמת טירונות חיל חינוך</p>

      <p className="opening-text bold">אז מה למדנו היום?</p>

      <p className="opening-text regular">
        למדנו על מבנה חיל החינוך, מגילת צה"ל ורוח צה"ל.
      </p>
      <p className="opening-text regular">
        כמש"קי חינוך והסברה לעתיד זהו מידע שילווה אותכם בקורס ולאורך השירות.
      </p>
      <p className="opening-text regular">
        <b>זכרו</b>- תמיד תוכלו לפתוח את הלומדה הזו ולהיזכר אם צריך.
      </p>

      <p className="opening-text bold">תהנו מהדרך והמון בהצלחה!</p>

      {/* 🔁 כפתור ראשי - התחלה מחדש */}
      <img
        src={characterImg}
        alt="character"
        className="end-character"
        onClick={startOver}
      />

      {/* 🔙 כפתור קטן לחזרה */}
      <div className="back-to-learning-btn" onClick={backToLomda}>
        חזרה ללומדה
      </div>
    </div>
  );
}

export default EndPage;