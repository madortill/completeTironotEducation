import React, { useState, useEffect } from "react";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";
import SpiritWithStars from "../../components/SpiritWithStars";
import butterfly from "../../assets/images/IDFspirit/butterfly.png";
import idfSpiritImg from "../../assets/images/IDFspirit/idfSpiritImg.svg";
import spiritMavo from "../../assets/images/IDFspirit/spiritMavo.svg";
import spiritHagdara from "../../assets/images/IDFspirit/spiritHagdara.svg";
import spiritYesod from "../../assets/images/IDFspirit/spiritYesod.svg";
import spiritArahim from "../../assets/images/IDFspirit/spiritArahim.svg";
import spiritParts from "../../assets/images/IDFspirit/spiritParts.svg";
import popUpValues from "../../assets/images/IDFspirit/popUpValues.svg";
import btnHard from "../../assets/images/IDFspirit/btnHard.png";

import { useCharacter } from "../../context/CharacterContext";
import fairyComment from "../../assets/images/characters/fairy/comment.png";
import elfComment from "../../assets/images/characters/elf/comment.png";

import "../../css/IDFspirit.css";
import FlipCardContainer from "../../components/FlipCardContainer.jsx";

function IDFspirit({ page, setPage, finishSubject, goToPrevSubject }) {
  const [showStars, setShowStars] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
  const totalPages = 10; // מספר העמודים בנושא

  const handleNext = () => {
    if (page === 7) {
      setShowPopup(true);
      return;
    }

    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      finishSubject();
    }
  };

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      goToPrevSubject(); // חזרה לנושא הקודם
    }
  };

  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const handleSubmit = () => {
    if (isSubmitted) return;

    if (text.trim() === "") return;

    // לחיצה ראשונה → רק אזהרה
    if (!confirmSubmit) {
      setShowWarning(true);
      setConfirmSubmit(true);

      setTimeout(() => {
        setShowWarning(false);
      }, 4500);

      return;
    }

    // לחיצה שנייה → הגשה אמיתית
    setIsSubmitted(true);
  };

  const { character } = useCharacter();

  const characterImg = character === "fairy" ? fairyComment : elfComment;

  const [showComment, setShowComment] = useState(false);

  return (
    <div>
      {page === 0 && (
        <div className="page1 page">
          <p className="title-chapter">- פרק 2 -</p>
          <p className="title-content-chapter">רוח צה"ל</p>
          <p className="sec-title-content">
            בפרק זה נלמד על רוח צה”ל, חשיבותה וחלקיה.
          </p>

          {/* Fade In אחרי 2 שניות */}
          {showStars && (
            <div className="stars-fade">
              <SpiritWithStars />
            </div>
          )}
        </div>
      )}

      {page === 1 && (
        <div className="page2 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">
            רוח צהל נועדה להגדיר ערכים מובילים לאורם יפעלו חיילי ומפקדי צה"ל
          </p>
          <p className="text-content">
            למה לדעתך חשוב שיהיו לצה”ל ערכים מובילים?
          </p>
          <div className="input-wrapper">
            <textarea
              className="styled-textarea"
              placeholder="שתפו מחשבה..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={isSubmitted}
            />
            <img src={butterfly} className="butterfly" />
          </div>

          {showWarning && (
            <div className="tooltip">שימו לב – לא תוכלו לערוך אחרי ההגשה</div>
          )}

          <button
            className={`submit-btn ${isSubmitted ? "submitted" : ""}`}
            onClick={handleSubmit}
            disabled={text.trim() === "" || isSubmitted}
          >
            {isSubmitted ? "הוגש ✓" : "הגש"}
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="page3 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="text-content">
            כדי שצה"ל יוכל לתפקד בצורה הטובה ביותר, צריך שיהיו מוטמעים אצל
            החיילים ערכים התומכים במשימה, שומרים על צה"ל צבא מוסרי, שומרים על
            סדר וארגון.
          </p>
          <p className="text-content">
            לא ברור לגמרי? בואו נדבר על הערכים עצמם זה בטח יעזור לכם להבין...
          </p>
          <img src={idfSpiritImg} alt="idfSpiritImg" className="idfSpiritImg" />
        </div>
      )}

      {page === 3 && (
        <div className="page4 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">"הבא" מוביל להסבר על כל שקופית</p>
          <img src={spiritParts} alt="spiritParts" className="spiritParts" />
        </div>
      )}
      {page === 4 && (
        <div className="page5 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">"הבא" מוביל להסבר על כל פסקה</p>
          <img src={spiritMavo} alt="spiritMavo" className="spiritParts" />
        </div>
      )}
      {page === 5 && (
        <div className="page6 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">"הבא" מוביל להסבר על כל פסקה</p>
          <img
            src={spiritHagdara}
            alt="spiritHagdara"
            className="spiritParts"
          />
        </div>
      )}
      {page === 6 && (
        <div className="page7 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">"הבא" מוביל להסבר על כל פסקה</p>
          <img src={spiritYesod} alt="spiritYesod" className="spiritParts" />
        </div>
      )}
      {page === 7 && (
        <div className="page8 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">"הבא" מוביל להסבר על כל פסקה</p>
          <img src={spiritArahim} alt="spiritArahim" className="spiritParts" />
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <img src={popUpValues} alt="popUpValues" />

                <button
                  className="popup-btn"
                  onClick={() => {
                    setShowPopup(false);
                    setPage(page + 1);
                  }}
                >
                  המשך
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {page === 8 && (
        <div className="page9 page">
          <p className="title-content">משימה</p>
          <p className="sec-title-content">ערכי צה"ל</p>
          <p className="text-content">
            {" "}
            <b>לחצו</b> על הקלפים עליהם הערכים המופיעים ברוח צה”ל.
          </p>
          <p className="text-content">
            כתבו על חמישה ערכים, מדוע הוא חשוב לדעתכם לביצוע המשימות ולמימוש
            ייעודו של צה”ל, (כפי שרשום במבוא של רוח צה”ל)
          </p>
          <FlipCardContainer setPage={setPage} />
        </div>
      )}

      {page === 9 && (
        <div className="page10 page">
          <p className="title-content">סיכום רוח צה"ל</p>
          <p className="sec-title-content">אז מה למדנו על רוח צה"ל?</p>
          <p className="text-content">
            למדנו מהי רוח צה"ל, ולמה חשוב שיובילו אותנו ערכים בעת ביצוע המשימה.{" "}
          </p>
          <p className="text-content">
            תפקידכם כמש"קי חינוך יהיה להטמיע אותם ביחידות אליהן תגיעו! וכמובן,
            מי מכם שיהיה מש"ק הסברה יקדם ערכים אלו בהסברות שיעביר.
          </p>
          <img
            className={`btnHard ${!showComment ? "grow-shrink" : ""}`}
            src={btnHard}
            alt="btnHard"
            onClick={() => setShowComment(true)}
          />
          {showComment && (
            <>
              <img
                src={characterImg}
                alt="chosen character"
                className="commentImg"
              />
              <p className="comment-hard-text">
                מזל שיש עוד פרק אחד...יאללה לחצו הבא!
              </p>
            </>
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

export default IDFspirit;
