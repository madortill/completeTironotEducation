import React, { useState, useEffect } from "react";
import "../css/meetEducation.css";

import nextBtn from "../assets/images/introduction/nextBtn.png";

import goal from "../assets/images/meetEducation/goal.png";
import mashakEdu from "../assets/images/meetEducation/mashakEdu.png";
import mashakExp from "../assets/images/meetEducation/mashakExp.png";
import arrow from "../assets/images/meetEducation/arrow.png";

function ArrayEducation({ finish }) {
  const [openGoal, setOpenGoal] = useState(false);
  const [hasClickedGoal, setHasClickedGoal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null); // ברירת מחדל
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finishedTracks, setFinishedTracks] = useState({
    edu: false,
    exp: false
  });
  const canFinish = finishedTracks.edu && finishedTracks.exp;
  const textsMashakEdu = [
    "מש״ק החינוך ישתבץ בסיום הקורס ביחידה ספציפית אליה הוא יהיה משויך (בשונה ממש״ק ההסברה אשר אליו מגיעות יחידות שונות בכל פעם). תפקידו הינו קידום תחום החינוך ביחידה זו.",

    "מש״ק החינוך עושה זאת ע״י גיבוש תכנית חינוך ליחידה, דרבון מפקדי היחידה לעיסוק בחינוך, ושאיפה להיכרות עם חיילי היחידה וצרכי החינוך ביחידה.",

    "מש״ק החינוך לרוב לא יעביר את תכני החינוך, אלא יכין אותם מאחורי הקלעים ויתדרך את המפקדים להעברתם — מתוך ההבנה בחשיבות שהמפקד יהיה הדמות החינוכית עבור החיילים ביחידה.",
  ];

  const textsMashakExp = [
    "מש״קי ההסברה משתבצים באזור בארץ אותו הם לומדים ומכירים היטב. הם מעבירים הדרכות (הסברות) ליחידות מתחלפות שמגיעות אליהן.",

    "התכנים המועברים בהסברות יהיו בהתאמה לבקשות המפקדים, ערכי חיל החינוך ובזיקה לאזור בארץ בו הם מתמקצעים. לרוב ההסברות יעברו באותו האזור ואף כחלק מסיור.",
  ];

  useEffect(() => {
    if (!selectedTrack) return;
  
    const isLast =
      currentIndex === currentTexts.length - 1;
  
    if (isLast && !finishedTracks[selectedTrack]) {
      setFinishedTracks((prev) => ({
        ...prev,
        [selectedTrack]: true
      }));
    }
  }, [currentIndex, selectedTrack]);

  const currentTexts =
    selectedTrack === "edu" ? textsMashakEdu : textsMashakExp;
  return (
    <div>
      <div className="page">
        <p className="title-content">מערך חינוך</p>

        <img
          src={goal}
          alt="goal"
          className={`goal-img-arrEdu ${!hasClickedGoal ? "grow-shrink" : ""}`}
          onClick={() => {
            setOpenGoal(true);
          }}
        />
        {hasClickedGoal && (
          <>
        <p className="sec-title-content">מקצועות המערך:</p>
        <p className="text-swich">לחצו על העיגולים!</p>
        <div className="container-mashakim">
        <img
  src={mashakEdu}
  alt="mashakEdu"
  className={`mashakEdu ${selectedTrack === "edu" ? "glow" : ""}`}
  onClick={() => {
    setSelectedTrack("edu");
    setCurrentIndex(0);
  }}
/>

<img
  src={mashakExp}
  alt="mashakExp"
  className={`mashakExp ${
    selectedTrack === "exp" ? "glow" : ""
  } ${!finishedTracks.edu ? "locked" : ""}`}
  onClick={() => {
    if (!finishedTracks.edu) return; // 🔒 נעול עד שמסיימים edu
    setSelectedTrack("exp");
    setCurrentIndex(0);
  }}
/>
        </div>
          {/* תוכן עם אנימציה */}
          {selectedTrack && (
              <div className="professeion-edu-contianer fade-in">
                <p className="text-swich">
                  {currentTexts[currentIndex]}
                </p>

                <div className="arrows-container">
                  <img
                    src={arrow}
                    alt="arrow-right"
                    className={`arrow-right ${
                      currentIndex === 0 ? "hidden-arrow" : ""
                    }`}
                    onClick={() => {
                      if (currentIndex > 0) {
                        setCurrentIndex((prev) => prev - 1);
                      }
                    }}
                  />

                  <img
                    src={arrow}
                    alt="arrow-left"
                    className={`arrow-left ${
                      currentIndex === currentTexts.length - 1
                        ? "hidden-arrow"
                        : ""
                    }`}
                    onClick={() => {
                      if (currentIndex < currentTexts.length - 1) {
                        setCurrentIndex((prev) => prev + 1);
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
        </div>

      {/* הפופאפ מחוץ ל-page */}
      {openGoal && (
        <div
          className="popup-overlay"
          onClick={() => {
            setOpenGoal(false);
            setHasClickedGoal(true);
          }}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <p className="goal-text-title">מטרת המערך</p>

            <p className="goal-text">
              מערך הנועד לענות על ייעודו של חיל החינוך בעיקר בתחום
              הפיקודי-חינוכי.
            </p>

            <p className="goal-text">
              מטרת המערך היא להטמיע את ערכי צה"ל ביחידות השונות ולהוביל תהליכים
              חינוכיים אשר תומכים את המשימה הצבאית.
            </p>

            <p
              className="close-goal-btn"
              onClick={() => {
                setOpenGoal(false);
                setHasClickedGoal(true);
              }}
            >
              סגור
            </p>
          </div>
        </div>
      )}

<img
  src={nextBtn}
  alt="next"
  className={`nextBtn nav-btns ${!canFinish ? "disabled-btn" : ""}`}
  onClick={() => {
    if (canFinish) {
      finish();
    }
  }}
/>
    </div>
  );
}

export default ArrayEducation;
