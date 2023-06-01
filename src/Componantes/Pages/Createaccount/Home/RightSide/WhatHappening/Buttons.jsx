import React from "react";


function Buttons({  buttonText, btnNext, customCss }) {
  return (
    <button  className={customCss} onClick={btnNext}>
      {buttonText}
    </button>
  );
}

export default Buttons; 