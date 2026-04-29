import React, { useState } from "react";
import "../css/meetEducation.css";
import TreeJobs from "../components/TreeJobs";
import { useLearningProgress } from "../context/LearningProgressContext";

import goal from "../assets/images/meetEducation/goal.png";
import nextBtn from "../assets/images/introduction/nextBtn.png";
import backBtn from "../assets/images/introduction/backBtn.png";

function ArrayShield({ finish, progress, setProgress }) {
  const [openGoal, setOpenGoal] = useState(false);
  const { learningProgress } = useLearningProgress();
  const isEducationCourse = learningProgress.userDetails.course === "חינוך";
  const {
    innerPage,
    hasClickedGoal,
    hasClickedBtn,
    hasAnimated,
    allApplesDone,
    openedApple,
    applesWithWorm,
    hodCompleted,
  } = progress;

  // תנאי לכפתור
  const canFinish =
  innerPage === 0
    ? isEducationCourse
      ? hasClickedGoal && hasClickedBtn
      : hasClickedGoal
    : allApplesDone;
  // ניווט פנימי
  const handleNextInner = () => {
    if (innerPage === 0 && canFinish) {
      setProgress({ innerPage: 1 });
    } else if (innerPage === 1) {
      finish();
    }
  };

  const handleBackInner = () => {
    if (innerPage === 1) {
      setProgress({ innerPage: 0 });
    }
  };

  return (
    <div className="page">
      <p className="title-content">מערך מגן</p>
      {/* עמוד 1 - כל התוכן הקיים */}
      {innerPage === 0 && (
        <>
          <img
            src={goal}
            alt="goal"
            className={`goal-img-arrEdu ${
              !hasClickedGoal ? "grow-shrink" : ""
            }`}
            onClick={() => setOpenGoal(true)}
          />

          {hasClickedGoal && isEducationCourse && (
            <div
              className={!hasAnimated ? "fade-in" : ""}
              onAnimationEnd={() => setProgress({ hasAnimated: true })}
            >
              <button
                className={`btn-what ${!hasClickedBtn ? "grow-shrink" : ""}`}
                onClick={() => setProgress({ hasClickedBtn: true })}
              >
                בחייאת... מה זה קשור אליי?
              </button>

              {hasClickedBtn && (
                <p className="text-shield">
                  זה כי במהלך השירות יהיה לכם ממשק עם חיילים ממערך מגן: כחלק
                  מתפקיד מש"ק החינוך אתם הזרוע ה"שיווקית" של כלל המענים של חיל
                  החינוך ביחידה שלכם. לכן חשוב שתכירו את המענים...
                </p>
              )}
            </div>
          )}
        </>
      )}

      {/* עמוד 2 - המשך */}
      {innerPage === 1 && (
        <div>
          <p className="sec-title-content">מקצועות המערך</p>

          <TreeJobs
            openedApple={openedApple}
            applesWithWorm={applesWithWorm}
            hodCompleted={hodCompleted}
            setOpenedApple={(value) => setProgress({ openedApple: value })}
            setApplesWithWorm={(value) =>
              setProgress({ applesWithWorm: value })
            }
            setHodCompleted={(value) => setProgress({ hodCompleted: value })}
            setTreeProgress={(changes) => setProgress(changes)}
            onAllApplesDone={(value) => setProgress({ allApplesDone: value })}
          />
        </div>
      )}

      {/* פופאפ */}
      {openGoal && (
        <div
          className="popup-overlay"
          onClick={() => {
            setOpenGoal(false);
            setProgress({ hasClickedGoal: true });
          }}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <p className="goal-text-title">מטרת מערך המגן</p>

            <p className="goal-text">
              מערך הנועד לענות על ייעודו של חיל החינוך בעיקר בתחום הלאומי-חברתי.
            </p>

            <p className="goal-text">
              המערך פועל לקידום שילוב אוכלוסיות ייחודיות (נוער בסיכון, עולים
              חדשים, בעלי מוגבלויות, עדות מיעוט, חסרי תעודת בגרות).
            </p>

            <p
              className="close-goal-btn"
              onClick={() => {
                setOpenGoal(false);
                setProgress({ hasClickedGoal: true });
              }}
            >
              סגור
            </p>
          </div>
        </div>
      )}

      {/* כפתורים */}
      <div className="container-buttons">
        <img
          src={backBtn}
          alt="back"
          className={`backBtn nav-btns ${
            innerPage === 0 ? "disabled-btn-edu" : ""
          }`}
          onClick={handleBackInner}
        />

        <img
          src={nextBtn}
          alt="next"
          className={`nextBtn nav-btns ${!canFinish ? "disabled-btn-edu" : ""}`}
          onClick={handleNextInner}
        />
      </div>
    </div>
  );
}

export default ArrayShield;
