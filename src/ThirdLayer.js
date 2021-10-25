import React, { useState } from "react";
import emotionList from "./emotionList";
import FinalLayer from "./FinalLayer";

export default function ThirdLayer({ secondEmotion, thirdEmotion }) {
  const [final, setFinal] = useState(null);

  return (
    <div>
      {console.log(emotionList[thirdEmotion])}
      <ul>
        {Object.keys(emotionList[secondEmotion][thirdEmotion]).map(
          (emotion) => (
            <button onClick={() => setFinal(emotion)}>{emotion}</button>
          )
        )}
      </ul>
      {final ? (
        <FinalLayer
          secondEmotion={secondEmotion}
          thirdEmotion={thirdEmotion}
          finalEmotion={final}
        />
      ) : (
        ""
      )}
    </div>
  );
}
