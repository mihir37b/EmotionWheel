import React, { useState } from "react";
import emotionList from "./emotionList";
import FinalLayer from "./FinalLayer";
import { Button, ButtonGroup } from "react-bootstrap";
import FadeIn from "react-fade-in";

export default function ThirdLayer({ secondEmotion, thirdEmotion }) {
  const [final, setFinal] = useState(null);

  return (
    <div>
      {final ? (
        <FadeIn transitionDuration={700}>
          <FinalLayer
            secondEmotion={secondEmotion}
            thirdEmotion={thirdEmotion}
            finalEmotion={final}
          />
        </FadeIn>
      ) : (
        <ul>
          <h6>{`${secondEmotion} - ${thirdEmotion}`}</h6>
          <h2>{"Ok, Let's Get More Specific"}</h2>
          {Object.keys(emotionList[secondEmotion][thirdEmotion]).map(
            (emotion) => (
              <ButtonGroup
                className="me-3 mt-3
          "
              >
                <Button
                  variant="outline-light"
                  onClick={() => setFinal(emotion)}
                >
                  {emotion}
                </Button>
              </ButtonGroup>
            )
          )}
        </ul>
      )}
    </div>
  );
}
