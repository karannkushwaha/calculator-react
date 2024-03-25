import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      // const result = eval(calVal);
      setCalVal(eval(calVal));
    } else {
      // const newDisplayValue = calVal + buttonName;
      setCalVal(calVal + buttonName);
    }
  };

  return (
    <>
      <center>
        <h1>Calculator</h1>
        <div className={style.calculator}>
          <Display displayValue={calVal} />
          <ButtonsContainer onButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;
