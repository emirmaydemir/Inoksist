import React from "react";

const FlagButton = ({ language, toggleLanguage, className }) => {
  return (
    <button onClick={toggleLanguage} className={className}>
      {language === "tr" ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
          alt="Turkish"
          className="flag-icon"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="English"
          className="flag-icon"
        />
      )}
    </button>
  );
};

export default FlagButton;
