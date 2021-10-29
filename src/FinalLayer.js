import React, { useState } from "react";
import emotionList from "./emotionList";
import FirstLayer from "./FirstLayer";

import FadeIn from "react-fade-in";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";
import { Button, ButtonGroup, Nav, Navbar } from "react-bootstrap";

import "./FinalLayer.css";

export default function FinalLayer({
  secondEmotion,
  thirdEmotion,
  finalEmotion,
}) {
  const [goBack, setGoBack] = useState(false);

  const [goThird, toggleFinal] = useState(false);
  const [goSecond, toggleThird] = useState(false);
  const [goFirst, toggleSecond] = useState(false);
  return (
    <div>
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
                {goThird ? (
                  <FadeIn transitionDuration={700}>
                    <ThirdLayer
                      secondEmotion={secondEmotion}
                      thirdEmotion={thirdEmotion}
                    />
                  </FadeIn>
                ) : (
                  <div className="final-container">
                    {goBack ? (
                      <FadeIn transitionDuration={700}>
                        <FirstLayer />
                      </FadeIn>
                    ) : (
                      <div>
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

                          <Nav.Link
                            className="links"
                            style={{ color: "white" }}
                            onClick={() => toggleFinal(true)}
                          >{`${finalEmotion} `}</Nav.Link>
                        </Navbar>

                        <h1>
                          <b>{finalEmotion}</b>
                        </h1>
                        <h3>
                          <div className="definition">
                            <i>
                              {
                                emotionList[secondEmotion][thirdEmotion][
                                  finalEmotion
                                ]
                              }
                            </i>{" "}
                          </div>
                        </h3>
                        <Button
                          variant="danger"
                          onClick={() => setGoBack(true)}
                        >
                          Start Over
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
