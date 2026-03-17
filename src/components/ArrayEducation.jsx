import React, { useState } from "react";
import "../css/meetEducation.css";

import goal from "../assets/images/meetEducation/goal.png";
import mashakEdu from "../assets/images/meetEducation/mashakEdu.png";
import mashakExp from "../assets/images/meetEducation/mashakExp.png";
import arrow from "../assets/images/meetEducation/arrow.png";




function ArrayEducation({ finish }) {
  const [openGoal, setOpenGoal] = useState(false);
  const [hasClickedGoal, setHasClickedGoal] = useState(false);
const textsMashakEdu = [
  "מש״ק החינוך ישתבץ בסיום הקורס ביחידה ספציפית אליה הוא יהיה משויך (בשונה ממש״ק ההסברה אשר אליו מגיעות יחידות שונות בכל פעם). תפקידו הינו קידום תחום החינוך ביחידה זו.",

  "מש״ק החינוך עושה זאת ע״י גיבוש תכנית חינוך ליחידה, דרבון מפקדי היחידה לעיסוק בחינוך, ושאיפה להיכרות עם חיילי היחידה וצרכי החינוך ביחידה.",

  "מש״ק החינוך לרוב לא יעביר את תכני החינוך, אלא יכין אותם מאחורי הקלעים ויתדרך את המפקדים להעברתם — מתוך ההבנה בחשיבות שהמפקד יהיה הדמות החינוכית עבור החיילים ביחידה."
];

const textsMashakExp = [
  "מש״קי ההסברה משתבצים באזור בארץ אותו הם לומדים ומכירים היטב. הם מעבירים הדרכות (הסברות) ליחידות מתחלפות שמגיעות אליהן.",
  
  "התכנים המועברים בהסברות יהיו בהתאמה לבקשות המפקדים, ערכי חיל החינוך ובזיקה לאזור בארץ בו הם מתמקצעים. לרוב ההסברות יעברו באותו האזור ואף כחלק מסיור."
];
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
            setHasClickedGoal(true);
          }}
        />
        <p className="sec-title-content">מקצועות המערך:</p>
          <div className="container-mashakim">
            <img src={mashakEdu} alt="mashakEdu" className="mashakEdu" />
            <img src={mashakExp} alt="mashakExp" className="mashakExp" />
          </div>
          <div className="professeion-edu-contianer">
            <p className="text-swich">ש״ק החינוך ישתבץ בסיום הקורס ביחידה ספציפית אליה הוא יהיה משויך (בשונה ממש״ק ההסברה אשר אליו מגיעות יחידות שונות בכל פעם). תפקידו הינו קידום תחום החינוך ביחידה זו.</p>
            <div className="arrows-container">
            <img src={arrow} alt="arrow-right" className="arrow-right"/>
            <img src={arrow} alt="arrow-left" className="arrow-left"/>
            </div>
          </div>
      </div>

      {/* הפופאפ מחוץ ל-page */}
      {openGoal && (
        <div className="popup-overlay" onClick={() => setOpenGoal(false)}>
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

            <p className="close-goal-btn" onClick={() => setOpenGoal(false)}>
              סגור
            </p>
          </div>
        </div>
      )}

      <button onClick={finish}>סיום</button>
    </div>
  );
}

export default ArrayEducation;
