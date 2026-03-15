import React, { useState, useEffect } from "react";
import "../../css/meetEducation.css";   
import IconBahadStars from "../../components/IconBahadStars";
import IconBahadClick from "../../components/IconBahadClick";


import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";

function MeetEducation({ page, setPage, finishSubject, goToPrevSubject }) {

  const totalPages = 2; // מספר העמודים בנושא
  const [showStars, setShowStars] = useState(false); // מצב לפייד אין

  // useEffect שיעלה את הכוכבים אחרי 2 שניות
  useEffect(() => {
    if (page === 0) {
      setShowStars(false); // לוודא איפוס כשחוזרים לדף
      const timer = setTimeout(() => setShowStars(true), 1000);
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

  return (
    <div>
      {page === 0 && (
        <div className="page1">
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
        <div className="page2">
          <p className="title-content">משמעות הסמל</p>
          <p className="text-content">סמל חיל החינוך מייצג את שלושת מרכזי פועלו- הלהבה הרביעית מייצגת מפקדת החיל.</p>
          <p className="sec-title-content">לחצו על הלהבות!</p>
          <IconBahadClick />
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