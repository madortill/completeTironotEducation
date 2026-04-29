// src/context/CharacterContext.jsx
import { createContext, useContext, useState } from "react";

// יצירת ה-Context
const CharacterContext = createContext();

// Provider שמספק את הדמות הנבחרת ושינוי שלה
export const CharacterProvider = ({ children }) => {
  // ברירת מחדל – פיה
  const [character, setCharacter] = useState("elf");

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Hook נוח לשימוש בכל קומפוננטה
export const useCharacter = () => {
  return useContext(CharacterContext);
};