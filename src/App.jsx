import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {
  return (
    <>
      <center>
        <h1>Calculator</h1>
        <div className={style.calculator}>
          <Display />
          <ButtonsContainer />
        </div>
      </center>
    </>
  );
}

export default App;
