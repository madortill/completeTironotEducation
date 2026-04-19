import React, { useState, useEffect } from "react";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";
import ScrollWithStars from "../../components/ScrollWithStars";
import Pazzle from "../../components/Pazzle";
import "../../css/IDFscroll.css";

import closeScroll from "../../assets/images/IDFscroll/closeScroll.png";
import scrollWithText from "../../assets/images/IDFscroll/scrollWithText.svg";
import goal from "../../assets/images/meetEducation/goal.png";

function IDFscroll({ page, setPage, goToPrevSubject }) {
  const [showStars, setShowStars] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGoal, setIsOpenGoal] = useState(false);

  useEffect(() => {
    if (page === 0) {
      setShowStars(false); // לוודא איפוס כשחוזרים לדף
      const timer = setTimeout(() => setShowStars(true), 500);
      return () => clearTimeout(timer); // לנקות הטיימר אם הקומפוננטה נעלמת
    } else {
      setShowStars(false); // אם לא בעמוד 0, לא להראות כוכבים
    }
  }, [page]);
  const totalPages = 4; // מספר העמודים בנושא

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
    // אם זה העמוד האחרון – לא עושים כלום
  };

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1); // מעבר לעמוד קודם
    } else {
      goToPrevSubject(); // חזרה לנושא הקודם
    }
  };

  return (
    <div>
      {page === 0 && (
        <div className="page1 page">
          <p className="title-chapter">- פרק 3 -</p>
          <p className="title-content-chapter">מגילת צה"ל</p>
          <p className="sec-title-content">
            בפרק זה נעמיק בהיכרות עם מגילת צה״ל – נבחן את חלקיה השונים ונבין את
            חשיבותם.
          </p>
          <p className="sec-title-content">
            כמו כן, נערוך השוואה בינה לבין רוח צה״ל ומגילת העצמאות.
          </p>

          {/* Fade In אחרי 2 שניות */}
          {showStars && (
            <div className="stars-fade">
              <ScrollWithStars />
            </div>
          )}
        </div>
      )}

      {page === 1 && (
        <div className="page2">
          <p className="title-content">מהי מגילת צה"ל?</p>
          <p className="sec-title-content">לחצו על הקלף!</p>
          <div className="scroll-container">
            <img
              src={isOpen ? scrollWithText : closeScroll}
              alt="scroll"
              className={`scroll-img 
      ${isOpen ? "scrollWithText fade-in" : "closeScroll floating"}`}
              onClick={() => setIsOpen(true)}
            />
          </div>
          {isOpen && (
            <div className="goal-scroll-container">
              <img
                src={goal}
                alt="goal"
                className={`goal-scroll ${!isOpenGoal ? "pulse" : ""}`}
                onClick={() => setIsOpenGoal(true)}
              />
              <div
                className={`goal-scroll-text-con ${isOpenGoal ? "show" : ""}`}
              >
                <p className="goal-scroll-text">
                  מטרתה- עיצוב הפעולות הערכיות של חיילי צה"ל.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

{page === 2 && (
        <div className="page3">
          <p className="title-content">חלקי המגילה</p>
          <p className="text-content">המגילה מחולקת ל-15 פסקאות שכל פסקה מתמקדת ברכיב אחר בזהות צה"ל:</p>
          <p className="sec-title-content">לחצו על הפסקאות להשלמת הפאזל!</p>
          <Pazzle/>
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
          className={`nextBtn nav-btns ${
            page === 1 && !isOpenGoal ? "disabled" : ""
          }`}
          onClick={() => {
            if (page === 1 && !isOpenGoal) return;
            handleNext();
          }}
        />
      </div>
    </div>
  );
}

export default IDFscroll;
