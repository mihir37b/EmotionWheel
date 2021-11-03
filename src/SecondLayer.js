import React, { useState } from "react";
import emotionList from "./emotionList";
import ThirdLayer from "./ThirdLayer";
import { Button, ButtonGroup, Nav, Navbar } from "react-bootstrap";
import FadeIn from "react-fade-in";
import FirstLayer from "./FirstLayer";

export default function SecondLayer({ secondEmotion }) {
  const [third, setThird] = useState(null);
  const [goBack, toggleGoBack] = useState(false);

  return (
    <div>
      {goBack ? (
        <FirstLayer />
      ) : (
        <div className="container">
          {third ? (
            <FadeIn transitionDuration={700}>
              <ThirdLayer secondEmotion={secondEmotion} thirdEmotion={third} />
            </FadeIn>
          ) : (
            <ul>
              <Navbar
                style={{
                  position: "fixed",
                  top: "-10%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={() => toggleGoBack(true)}
                >{`${secondEmotion} `}</Nav.Link>
              </Navbar>
              <h2>{"Gotcha, How About These"}</h2>
              {Object.keys(emotionList[secondEmotion]).map((emotion) => (
                <ButtonGroup
                  className="me-3 mt-3
         "
                >
                  <Button
                    variant="outline-light"
                    onClick={() => setThird(emotion)}
                  >
                    {emotion}
                  </Button>
                </ButtonGroup>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
