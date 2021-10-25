import React, { useState } from "react";
import emotionList from "./emotionList";

export default function FinalLayer({
  secondEmotion,
  thirdEmotion,
  finalEmotion,
}) {
  return (
    <div>
      <h3>{emotionList[secondEmotion][thirdEmotion][finalEmotion]}</h3>
    </div>
  );
}
