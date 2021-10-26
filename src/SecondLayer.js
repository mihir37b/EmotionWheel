import React, { useState } from "react";
import emotionList from "./emotionList";
import ThirdLayer from "./ThirdLayer";
import { Button, ButtonGroup } from "react-bootstrap";
import FadeIn from "react-fade-in";

export default function SecondLayer({ secondEmotion }) {
  const [third, setThird] = useState(null);

  return (
    <div>
      {third ? (
        <FadeIn transitionDuration={700}>
          <ThirdLayer secondEmotion={secondEmotion} thirdEmotion={third} />
        </FadeIn>
      ) : (
        <ul>
          <h6>{`${secondEmotion} `}</h6>
          <h2>{"Gotcha, How About These"}</h2>
          {Object.keys(emotionList[secondEmotion]).map((emotion) => (
            <ButtonGroup
              className="me-3 mt-3
         "
            >
              <Button variant="outline-light" onClick={() => setThird(emotion)}>
                {emotion}
              </Button>
            </ButtonGroup>
          ))}
        </ul>
      )}
    </div>
  );
}
