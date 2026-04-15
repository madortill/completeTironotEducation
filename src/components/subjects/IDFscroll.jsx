import React, { useState, useEffect } from "react";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";
import ScrollWithStars from "../../components/ScrollWithStars";
import "../../css/IDFscroll.css";

import closeScroll from "../../assets/images/IDFscroll/closeScroll.png";
import scrollWithText from "../../assets/images/IDFscroll/scrollWithText.svg";

function IDFscroll({ page, setPage, goToPrevSubject }) {
  const [showStars, setShowStars] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

export default IDFscroll;
