import { Form } from "react-bootstrap";
import style from "../App.module.css";
const Display = () => {
  return (
    <>
      {/* <Form.Control type="text" /> */}
      <input type="text" className={style.display} />
    </>
  );
};
export default Display;
