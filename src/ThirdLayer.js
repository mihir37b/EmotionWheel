import React, { useState } from "react";
import emotionList from "./emotionList";
import FinalLayer from "./FinalLayer";
import { Button, ButtonGroup, Nav, Navbar } from "react-bootstrap";
import FadeIn from "react-fade-in";
import SecondLayer from "./SecondLayer";
import FirstLayer from "./FirstLayer";

export default function ThirdLayer({ secondEmotion, thirdEmotion }) {
  const [final, setFinal] = useState(null);
  const [goSecond, toggleThird] = useState(false);
  const [goFirst, toggleSecond] = useState(false);
  return (
    <div className="first-container">
      {goFirst ? (
        <FadeIn transitionDuration={700}>
          <FirstLayer />
        </FadeIn>
      ) : (
        <div className="second-container">
          {goSecond ? (
            <FadeIn transitionDuration={700}>
              <SecondLayer secondEmotion={secondEmotion} />
            </FadeIn>
          ) : (
            <div className="third-container">
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
                  <Navbar>
                    <Nav.Link
                      className="links"
                      style={{ color: "white" }}
                      onClick={() => toggleSecond(true)}
                    >{`${secondEmotion} `}</Nav.Link>

                    <Nav.Link
                      className="links"
                      style={{ color: "white" }}
                      onClick={() => toggleThird(true)}
                    >{`${thirdEmotion} `}</Nav.Link>
                  </Navbar>
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
          )}
        </div>
      )}
    </div>
  );
}
