import React, { useState, useEffect } from "react";
import nextBtn from "../../assets/images/introduction/nextBtn.png";
import backBtn from "../../assets/images/introduction/backBtn.png";
import ScrollWithStars from "../../components/ScrollWithStars";
import Pazzle from "../../components/Pazzle";
import "../../css/IDFscroll.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import closeScroll from "../../assets/images/IDFscroll/closeScroll.png";
import scrollWithText from "../../assets/images/IDFscroll/scrollWithText.svg";
import goal from "../../assets/images/meetEducation/goal.png";

import { useCharacter } from "../../context/CharacterContext";
import fairyStarsIndipendent from "../../assets/images/characters/fairy/starsIndipendent.png";
import elfStarsIndipendent from "../../assets/images/characters/elf/starsIndipendent.png";
import fairyStarsSpirit from "../../assets/images/characters/fairy/starsSpirit.png";
import elfStarsSpirit from "../../assets/images/characters/elf/starsSpirit.png";
import fairyBubbles from "../../assets/images/characters/fairy/bubblesCharacter.png";
import elfBubbles from "../../assets/images/characters/elf/bubblesCharacter.png";

function IDFscroll({
  page,
  goNext,
  goBack,
  isNextUnlocked,
  unlockCurrentPage,
  progress,
  setProgress,
}) {
  const navigate = useNavigate();
  const { isOpen, isOpenGoal, openedGroups = [] } = progress || {};
  const [showStars, setShowStars] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const openedGroupsCount = openedGroups.length;
  const location = useLocation();
  const userName = location.state?.userName;

  useEffect(() => {
    if (page === 0) {
      setShowStars(false); // לוודא איפוס כשחוזרים לדף
      const timer = setTimeout(() => setShowStars(true), 500);
      return () => clearTimeout(timer); // לנקות הטיימר אם הקומפוננטה נעלמת
    } else {
      setShowStars(false); // אם לא בעמוד 0, לא להראות כוכבים
    }
  }, [page]);
  const totalPages = 5; // מספר העמודים בנושא
  const progressValue = page === 0 ? 0 : page;
  const totalProgressPages = totalPages - 1;

  const handleNext = () => {
    if (page === 4) {
      setShowPopup(true);
      return;
    }

    goNext();
  };

  const handleBack = () => {
    goBack();
  };
  // הדמות
  const { character } = useCharacter();

  const characterImg =
    character === "fairy" ? fairyStarsIndipendent : elfStarsIndipendent;
  const characterImg2 =
    character === "fairy" ? fairyStarsSpirit : elfStarsSpirit;
  const characterEnd = character === "fairy" ? fairyBubbles : elfBubbles;

  const endLomda = () => {
    navigate("/end", {});
  };

  useEffect(() => {
    if (page === 1 && isOpenGoal && !isNextUnlocked) {
      unlockCurrentPage();
    }

    if (page === 2 && openedGroupsCount >= 15 && !isNextUnlocked) {
      unlockCurrentPage();
    }
  }, [page, isOpenGoal, openedGroupsCount, isNextUnlocked]);
  // תנאים לכפתור
  const isNextDisabled =
    (page === 1 && !isOpenGoal) || (page === 2 && openedGroupsCount < 15);

  return (
    <div>
      {page !== 0 && (
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{
              width: `${(progressValue / totalProgressPages) * 100}%`,
            }}
          />
        </div>
      )}
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
        <div className="page page2">
          <p className="title-content">מהי מגילת צה"ל?</p>
          <p className="sec-title-content">לחצו על הקלף!</p>
          <div className="scroll-container">
            <img
              src={isOpen ? scrollWithText : closeScroll}
              alt="scroll"
              className={`scroll-img 
      ${isOpen ? "scrollWithText fade-in" : "closeScroll floating"}`}
              onClick={() => setProgress({ isOpen: true })}
            />
          </div>
          {isOpen && (
            <div className="goal-scroll-container">
              <img
                src={goal}
                alt="goal"
                className={`goal-scroll ${!isOpenGoal ? "pulse" : ""}`}
                onClick={() => setProgress({ isOpenGoal: true })}
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
        <div className=" page page3">
          <p className="title-content">חלקי המגילה</p>
          <p className="text-content">
            המגילה מחולקת ל-15 פסקאות שכל פסקה מתמקדת ברכיב אחר בזהות צה"ל:
          </p>
          <p className="sec-title-content">לחצו על הפסקאות להשלמת הפאזל!</p>
          <Pazzle
            openedGroups={openedGroups}
            setOpenedGroups={(value) => {
              if (typeof value === "function") {
                setProgress({
                  openedGroups: value(openedGroups),
                });
              } else {
                setProgress({
                  openedGroups: value,
                });
              }
            }}
            onProgressChange={(value) => setProgress({ openedGroupsCount: value })}
          />
          <p
            className={`identity-text ${openedGroupsCount >= 15 ? "show" : ""}`}
          >
            כל הפסקאות יחדיו מגדירות את זהות צה”ל!
          </p>
        </div>
      )}

      {page === 3 && (
        <div className=" page page4">
          <p className="title-content">מגילת צה"ל בהשוואה</p>
          <p className="sec-title-content">מגילת העצמאות ומגילת צה"ל</p>
          <img src={characterImg} alt="chosen character" />
        </div>
      )}

      {page === 4 && (
        <div className=" page page5">
          <p className="title-content">מגילת צה"ל בהשוואה</p>
          <p className="sec-title-content">מגילת העצמאות ומגילת צה"ל</p>
          <img src={characterImg2} alt="chosen character" />
        </div>
      )}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-center">
            <div className="popup-box">
              <img
                src={characterEnd}
                alt="characterEnd"
                className="characterEnd"
              />
              <p className="popup-title">כל הכבוד {userName} סיימת!</p>

              <button
                className="popup-end-btn"
                onClick={() => {
                  setShowPopup(false);
                  endLomda();
                }}
              >
                יאללה לסיים!
              </button>
            </div>
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
          className={`nextBtn nav-btns ${isNextDisabled ? "disabled" : ""}`}
          onClick={() => {
            if (isNextDisabled) return;
            handleNext();
          }}
        />
      </div>
    </div>
  );
}

export default IDFscroll;
