import style from "../App.module.css";
const Display = ({ displayValue }) => {
  return (
    <>
      {/* <Form.Control type="text" /> */}
      <input
        type="text"
        className={style.display}
        value={displayValue}
        readOnly
      />
    </>
  );
};
export default Display;
