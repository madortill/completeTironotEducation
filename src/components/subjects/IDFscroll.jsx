import React from "react";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";

function IDFscroll({ page, setPage, goToPrevSubject }) {

  const totalPages = 2; // מספר העמודים בנושא

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
        <div className="page1">
          <p>מלל של דף ראשון - מגילת צה"ל</p>
        </div>
      )}

      {page === 1 && (
        <div className="page2">
          <p>מלל של דף שני - המשך מגילת צה"ל</p>
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