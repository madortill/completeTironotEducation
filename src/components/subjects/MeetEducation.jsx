import React, { useState, useEffect } from "react";
import "../../css/meetEducation.css";   
import IconBahadStars from "../../components/IconBahadStars";
import IconBahadClick from "../../components/IconBahadClick";
import ArrayEducation from "../../components/ArrayEducation";
import ArrayShield from "../../components/ArrayShield";


import fairyBubbleTalk from "../../assets/images/characters/fairy/bubbleTalk.png";
import elfBubbleTalk from "../../assets/images/characters/elf/bubbleTalk.png";
import fairyComment from "../../assets/images/characters/fairy/comment.png";
import elfComment from "../../assets/images/characters/elf/comment.png";
import arrayEduImg from "../../assets/images/meetEducation/arrayEduImg.png";
import arrayShieldImg from "../../assets/images/meetEducation/arrayShieldImg.png";
import viArrays from "../../assets/images/meetEducation/viArrays.png";


import { useCharacter } from "../../context/CharacterContext";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";

function MeetEducation({ page, setPage, finishSubject, goToPrevSubject }) {

  const totalPages = 10; // מספר העמודים בנושא
  const [showStars, setShowStars] = useState(false); // מצב לפייד אין

  // useEffect שיעלה את הכוכבים אחרי 2 שניות
  useEffect(() => {
    if (page === 0) {
      setShowStars(false); // לוודא איפוס כשחוזרים לדף
      const timer = setTimeout(() => setShowStars(true), 500);
      return () => clearTimeout(timer); // לנקות הטיימר אם הקומפוננטה נעלמת
    } else {
      setShowStars(false); // אם לא בעמוד 0, לא להראות כוכבים
    }
  }, [page]);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      finishSubject(); // אם זה העמוד האחרון → מעבר לנושא הבא
    }
  };

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      goToPrevSubject(); // חזרה לנושא הקודם
    }
  };

  const { character } = useCharacter();

  const characterImg =
    character === "fairy"
      ? fairyBubbleTalk
      : elfBubbleTalk;

      const characterImg2 =
    character === "fairy"
      ? fairyComment
      : elfComment;

      // בחירת מערך
      const [selectedArray, setSelectedArray] = useState(null);
const [finishedArrays, setFinishedArrays] = useState({
  edu: false,
  shield: false
});

const finishArray = (arrayName) => {
  setFinishedArrays((prev) => ({
    ...prev,
    [arrayName]: true
  }));

  setSelectedArray(null); // חזרה למסך הבחירה
};

  return (
    <div>
      {page === 0 && (
        <div className="page1 page">
          <p className="title-chapter">- פרק 1 -</p>
          <p className="title-content-chapter">הכירו את חיל החינוך</p>
          <p className="sec-title-content">
            בפרק זה נכיר את החיל, הערכים שלו והתפקידים המרכזיים בו.
          </p>

          {/* Fade In אחרי 2 שניות */}
          {showStars && (
  <div className="stars-fade">
    <IconBahadStars />
  </div>
)}

        </div>
      )}

      {page === 1 && (
        <div className="page2 page">
          <p className="title-content">משמעות הסמל</p>
          <p className="text-content">סמל חיל החינוך מייצג את שלושת מרכזי פועלו- הלהבה הרביעית מייצגת מפקדת החיל.</p>
          <p className="sec-title-content">לחצו על הלהבות!</p>
          <IconBahadClick />
        </div>
      )}

        {page === 2 && (
        <div className="page3 page">
          <p className="title-content">ייעודו של החיל</p>
          <img
        src={characterImg}
        alt="chosen character"
        className="bubbleTalkImg"
      />
      <p className="bubble-text">ייעודו של חיל החינוך הוא להוות סמכות מקצועית המקדמת את תחום הפיקודי-חינוכי והתחום הלאומי חברתי בצה”ל ובמדינה.</p>
        </div>
      )}

      {page === 3 && (
        <div className="page4 page">
          <p className="title-content"> מבנה חיל החינוך</p>
          <p className="sec-title-content">בית ספר למקצועות החינוך</p>
          <p className="text-content">זהו למעשה- בה”ד(בסיס הדרכה) החינוך.</p>
          <p className="text-content">אמון על הכשרת כוח אדם בחיל החינוך והנוער.</p>
          <p className="text-content">ההכשרות בבית הספר כוללות הכשרות יסוד(טירונים המתגייסים לתפקיד ראשון והן הכשרות קצינים והשתלמויות חיליות).</p>
          <img
        src={characterImg2}
        alt="chosen character"
        className="commentImg"
      />
      <p className="comment-text">ממש איפה שאתם עכשיו!</p>
          </div>
      )}
      {page === 4 && (
  <div className="page5 page">

    {!selectedArray && (
      <>
        <p className="title-content"> מבנה חיל החינוך</p>
        <p className="sec-title-content">מערך חינוך ומערך מגן</p>
        <p className="text-content">
          מערכים אלו עובדים בשיתוף פעולה כדי לענות על מטרות החיל.
        </p>
        <p className="sec-title-content instArray">
          לחצו לפירוט על המערכים!
        </p>

        <div className="container-arrays-images">

          <img
            src={arrayEduImg}
            alt="arrayEdu"
            className="arrays-images arrayEdu"
            onClick={() => setSelectedArray("edu")}
          />

          <img
            src={arrayShieldImg}
            alt="arrayShield"
            className="arrays-images arrayShield"
            onClick={() => setSelectedArray("shield")}
          />

        </div>

        {finishedArrays.edu && (
          <img src={viArrays} alt="viArrays" className="viArrayEdu" />
        )}

        {finishedArrays.shield && (
          <img src={viArrays} alt="viArrays" className="viArrayshield" />
        )}
      </>
    )}

    {selectedArray === "edu" && (
      <ArrayEducation finish={() => finishArray("edu")} />
    )}

    {selectedArray === "shield" && (
      <ArrayShield finish={() => finishArray("shield")} />
    )}

  </div>
)}

      <div className="container-buttons">
        <img
          src={backBtn}
          alt="back"
          className="backBtn nav-btns"
          onClick={handleBack}
        />
        <img
          src={nextBtn}
          alt="next"
          className="nextBtn nav-btns"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default MeetEducation;