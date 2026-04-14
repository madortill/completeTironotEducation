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



import "../../css/IDFspirit.css";

function IDFspirit({ page, setPage, finishSubject, goToPrevSubject }) {
  const [showStars, setShowStars] = useState(false);
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
  const totalPages = 9; // מספר העמודים בנושא

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
      }, 2500);

      return;
    }

    // לחיצה שנייה → הגשה אמיתית
    setIsSubmitted(true);
  };

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
          כדי שצה"ל יוכל לתפקד בצורה הטובה ביותר, צריך שיהיו מוטמעים אצל החיילים ערכים התומכים במשימה, שומרים על צה"ל צבא מוסרי, שומרים על סדר וארגון.
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
          <p className="sec-title-content">
           לחצו על הפסקאות!
          </p>
          <img src={spiritParts} alt="spiritParts" className="spiritParts" />
        </div>
      )}
      {page === 4 && (
        <div className="page5 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">
           לחצו על הבא בשביל הסבר!
          </p>
          <img src={spiritMavo} alt="spiritMavo" className="spiritParts" />
        </div>
      )}
      {page === 5 && (
        <div className="page6 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">
           לחצו על הפסקאות!
          </p>
          <img src={spiritHagdara} alt="spiritHagdara" className="spiritParts" />
        </div>
      )}
      {page === 6 && (
        <div className="page7 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">
           לחצו על הפסקאות!
          </p>
          <img src={spiritYesod} alt="spiritYesod" className="spiritParts" />
        </div>
      )}
      {page === 7 && (
        <div className="page8 page">
          <p className="title-content">חשיבות רוח צה"ל</p>
          <p className="sec-title-content">
           לחצו על הפסקאות!
          </p>
          <img src={spiritArahim} alt="spiritArahim" className="spiritParts" />
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
