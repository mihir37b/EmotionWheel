import React, { useState } from "react";
import emotionList from "./emotionList";
import ThirdLayer from "./ThirdLayer";

export default function SecondLayer({ secondEmotion }) {
  const [third, setThird] = useState(null);

  return (
    <div>
      <ul>
        {Object.keys(emotionList[secondEmotion]).map((emotion) => (
          <button onClick={() => setThird(emotion)}>{emotion}</button>
        ))}
      </ul>
      {console.log(third)}
      {third ? (
        <ThirdLayer secondEmotion={secondEmotion} thirdEmotion={third} />
      ) : (
        ""
      )}
    </div>
  );
}
