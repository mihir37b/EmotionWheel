import React, { useState } from "react";
import emotionList from "./emotionList";
import SecondLayer from "./SecondLayer";
import { Button, ButtonGroup } from "react-bootstrap";
import "./FirstLayer.css";
import FadeIn from "react-fade-in";

export default function FirstLayer() {
  const [second, setSecond] = useState(null);

  return (
    <div className="container">
      {second ? (
        <FadeIn transitionDuration={700}>
          <SecondLayer secondEmotion={second} />
        </FadeIn>
      ) : (
        <ul>
          <h2>{"Which Of These Describes How You Feel?"}</h2>

          {Object.keys(emotionList).map((emotion) => (
            <ButtonGroup
              className="me-3 mt-3
                "
            >
              <div className="button-wrap">
                <Button
                  variant="outline-light"
                  onClick={() => setSecond(emotion)}
                >
                  {emotion}
                </Button>
              </div>
            </ButtonGroup>
          ))}
        </ul>
      )}
    </div>
  );
}
