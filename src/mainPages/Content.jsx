import React, { useState } from "react";
import "../css/Content.css";
import Navbar from "../components/Navbar";
import Introduction from "../components/subjects/Introduction";
import MeetEducation from "../components/subjects/MeetEducation";
import IDFspirit from "../components/subjects/IDFspirit";
import IDFscroll from "../components/subjects/IDFscroll";

function Content() {
  // נושא נוכחי
  const [subjNum, setSubjNum] = useState(0);

  // אילו נושאים הושלמו
  const [completedSubjects, setCompletedSubjects] = useState([false, false, false, false]);

  // עמודים לכל נושא
  const [subjectPages, setSubjectPages] = useState([0, 0, 0, 0]);

  const setPageForSubject = (index, page) => {
    setSubjectPages(prev => {
      const updated = [...prev];
      updated[index] = page;
      return updated;
    });
  };

  // פונקציה לסימון נושא כהושלם
  const finishSubject = (index) => {
    setCompletedSubjects(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const subjArr = [
    "מבוא",
    "הכירו את חיל החינוך",
    "רוח צה\"ל",
    "מגילת צה\"ל",
  ];

  // מעבר לנושא הבא
  const goToNextSubject = () => {
    setSubjNum(prev => Math.min(prev + 1, subjArr.length - 1));
  };

  // מעבר לנושא הקודם
  const goToPrevSubject = () => {
    setSubjNum(prev => Math.max(prev - 1, 0));
  };

  // מספר העמודים לכל נושא
  const totalPagesPerSubject = [2, 2, 2, 2]; // לדוגמה - אפשר להגדיר יותר עמודים בעתיד

  const renderSubject = () => {
    switch (subjNum) {
      case 0:
        return (
          <Introduction
            page={subjectPages[0]}
            setPage={(p) => setPageForSubject(0, p)}
            finishSubject={() => { finishSubject(0); goToNextSubject(); }}
            totalPages={totalPagesPerSubject[0]}
          />
        );

      case 1:
        return (
          <MeetEducation
            page={subjectPages[1]}
            setPage={(p) => setPageForSubject(1, p)}
            finishSubject={() => { finishSubject(1); goToNextSubject(); }}
            goToPrevSubject={goToPrevSubject}
            totalPages={totalPagesPerSubject[1]}
          />
        );

      case 2:
        return (
          <IDFspirit
            page={subjectPages[2]}
            setPage={(p) => setPageForSubject(2, p)}
            finishSubject={() => { finishSubject(2); goToNextSubject(); }}
            goToPrevSubject={goToPrevSubject}
            totalPages={totalPagesPerSubject[2]}
          />
        );

      case 3:
        return (
          <IDFscroll
            page={subjectPages[3]}
            setPage={(p) => setPageForSubject(3, p)}
            goToPrevSubject={goToPrevSubject}
            totalPages={totalPagesPerSubject[3]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar
        subjNum={subjNum}
        setSubjNum={setSubjNum}
        completedSubjects={completedSubjects}
      />
      {renderSubject()}
    </div>
  );
}

export default Content;