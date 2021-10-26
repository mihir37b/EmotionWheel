import "./App.css";
import FirstLayer from "./FirstLayer";
import FadeIn from "react-fade-in";
import logo from "./EmotionWheel.png";

function App() {
  return (
    <div>
      <img src={logo} />
      <div className="App">
        <FadeIn transitionDuration={700}>
          <FirstLayer />
        </FadeIn>
      </div>
    </div>
  );
}

export default App;
