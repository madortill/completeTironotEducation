import React, { useState } from "react";
import "../css/OpeningPage.css";
import UserDetails from "../components/UserDetails";

function OpeningPage() {
  const [page, setPage] = useState(1);
  const [fade, setFade] = useState("");

  // פרטי המשתמש
  const [userName, setUserName] = useState("");
  const [course, setCourse] = useState("");

  const goToSecondPage = () => {
    setFade("fade-out");
    setTimeout(() => {
      setPage(2);
      setFade("fade-in");
    }, 500);
  };

  return (
    <div className={`open-text-container ${fade}`}>
      {page === 1 && (
        <>
          <p className='opening-title'>לומדת השלמת טירונות חיל חינוך</p>

          <p className='opening-text bold'>ברוכים הבאים לחיל החינוך!</p>

          <p className='opening-text regular'>
            החיילים בקורסים שלנו עוברים לרוב טירונות בבה”ד החינוך
            וכבר שם מתחילים ללמוד מעט על החיל והתפקיד
          </p>

          <p className='opening-text bold'>מדאיג אותך? אין צורך!</p>

          <p className='opening-text regular'>
            הלומדה הזו תשלים לך את כל המידע שצריך!
          </p>

          <div className='btn-start-div' onClick={goToSecondPage}>
            <p className="btn-text">בואו נכיר!</p>
          </div>
        </>
      )}

      {page === 2 && (
        <UserDetails
          userName={userName}
          setUserName={setUserName}
          course={course}
          setCourse={setCourse}
        />
      )}
    </div>
  );
}

export default OpeningPage;