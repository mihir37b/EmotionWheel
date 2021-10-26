import React, { useState } from "react";
import emotionList from "./emotionList";
import FirstLayer from "./FirstLayer";
import Button from "react-bootstrap/Button";
import FadeIn from "react-fade-in";
import "./FinalLayer.css";

export default function FinalLayer({
  secondEmotion,
  thirdEmotion,
  finalEmotion,
}) {
  const [goBack, setGoBack] = useState(false);
  return (
    <div>
      {goBack ? (
        <FadeIn transitionDuration={700}>
          <FirstLayer />
        </FadeIn>
      ) : (
        <div>
          <h6>{`${secondEmotion} - ${thirdEmotion} - ${finalEmotion}`}</h6>

          <h1>
            <b>{finalEmotion}</b>
          </h1>
          <h3>
            <div className="definition">
              <i>{emotionList[secondEmotion][thirdEmotion][finalEmotion]}</i>{" "}
            </div>
          </h3>
          <Button variant="danger" onClick={() => setGoBack(true)}>
            Start Over
          </Button>
        </div>
      )}
    </div>
  );
}
