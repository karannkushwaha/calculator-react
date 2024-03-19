import { Button } from "react-bootstrap";
import style from "../App.module.css";

const ButtonsContainer = () => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttoncontainer}>
      {buttonName.map((items) => (
        <Button variant="secondary" className={style.button}>
          {items}
        </Button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
