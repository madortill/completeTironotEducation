import React from "react";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";

function Introduction({ page, setPage, finishSubject }) {

  const totalPages = 2; // מספר העמודים בנושא

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      finishSubject(); // אם זה העמוד האחרון -> מעבר לנושא הבא
    }
  };

  const handleBack = () => {
    // אין חזרה אחורה למבוא כי זה הנושא הראשון
  };

  return (
    <div>

      {page === 0 && (
        <div className="page1">
          <p>מלל של דף ראשון - מבוא לנושא</p>
        </div>
      )}

      {page === 1 && (
        <div className="page2">
          <p>מלל של דף שני - המשך מבוא</p>
        </div>
      )}

      <div className="container-buttons">
        <img
          src={backBtn}
          alt="back"
          className="backBtn nav-btns disabled"
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

export default Introduction;