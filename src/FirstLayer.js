import React, { useState } from "react";
import emotionList from "./emotionList";
import SecondLayer from "./SecondLayer";

export default function FirstLayer() {
  const [second, setSecond] = useState(null);

  return (
    <div>
      <ul>
        {Object.keys(emotionList).map((emotion) => (
          <button onClick={() => setSecond(emotion)}>{emotion}</button>
        ))}
      </ul>
      {second ? <SecondLayer secondEmotion={second} /> : ""}
    </div>
  );
}
