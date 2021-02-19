import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const Root = styled.div`
  text-align: center;
  font-size: 1.5rem;
  background-color: #f1fdff;
`;

const Container = styled(Paper)`
  width: 300px;
  height: 400px;
  margin: 0 auto;
`;

const WindowNumber = styled(Paper)`
  display: flex;

  width: 100%;
  height: 80px;
  text-align: right;
  align-items: center;

  .value {
    width: 300px;
  }
`;
const NumberButton = styled.div`
  position: relative;

  .number-button-group {
  }
  .number-button {
    width: 76px;
    height: 72px;
  }
`;

const App = () => {
  const [calculation, setCalculation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [equal, setEqual] = useState(false);
  const [addToValue, setAddToValue] = useState("");
  const [sign, setSign] = useState(false);

  const numberClick = (buNum) => {
    if (buNum === "reset") {
      setInputValue(() => setInputValue(""));
      setCalculation(() => setCalculation([]));
      setAddToValue(() => setAddToValue(""));
      setEqual(false);
      setSign(false);
    } else if (buNum !== ("+" || "-" || "*" || "/")) {
      setInputValue(() => inputValue + buNum);
      setAddToValue(() => addToValue + buNum);
      setEqual(false);
      setSign(false);
    }
  };

  const signClick = (calculation, addToValue, buNum) => {
    setCalculation([...calculation, addToValue, buNum]);
    setInputValue(() => inputValue + buNum);
    setAddToValue(() => setAddToValue(""));
    setEqual(false);
    setSign(true);
  };
  const equalClick = (calculation, addToValue, buNum) => {
    setCalculation([...calculation, addToValue]);
    setAddToValue(() => setAddToValue(""));
    setEqual(true);
    setSign(false);
  };

  return (
    <Root>
      <Container>
        Calculator
        <WindowNumber>
          <div className="value">
            {inputValue}
            {equal && <div>{eval(calculation.join(""))}</div>}
            {console.log(calculation)}
          </div>
        </WindowNumber>
        <NumberButton>
          <div className="number-button-group">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => numberClick("7")}
                className="number-button"
              >
                7
              </Button>
              <Button
                onClick={() => numberClick("8")}
                className="number-button"
              >
                8
              </Button>
              <Button
                onClick={() => numberClick("9")}
                className="number-button"
              >
                9
              </Button>
              <Button
                onClick={() => signClick(calculation, addToValue, "+")}
                className="number-button"
                disabled={sign === true}
              >
                +
              </Button>
            </ButtonGroup>
          </div>
          <div className="number-button-group">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => numberClick("4")}
                className="number-button"
              >
                4
              </Button>
              <Button
                onClick={() => numberClick("5")}
                className="number-button"
              >
                5
              </Button>
              <Button
                onClick={() => numberClick("6")}
                className="number-button"
              >
                6
              </Button>
              <Button
                onClick={() => signClick(calculation, addToValue, "-")}
                className="number-button"
                disabled={sign === true}
              >
                -
              </Button>
            </ButtonGroup>
          </div>
          <div className="numbe-button-group">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => numberClick("1")}
                className="number-button"
              >
                1
              </Button>
              <Button
                onClick={() => numberClick("2")}
                className="number-button"
              >
                2
              </Button>
              <Button
                onClick={() => numberClick("3")}
                className="number-button"
              >
                3
              </Button>
              <Button
                onClick={() => signClick(calculation, addToValue, "*")}
                className="number-button"
                disabled={sign === true}
              >
                *
              </Button>
            </ButtonGroup>
          </div>
          <div className="number-button-group">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => numberClick(".")}
                className="number-button"
              >
                .
              </Button>
              <Button
                onClick={() => numberClick("0")}
                className="number-button"
              >
                0
              </Button>
              <Button
                onClick={() => {
                  equalClick(calculation, addToValue, "=");
                }}
                className="number-button"
                disabled={sign === true}
              >
                =
              </Button>
              <Button
                onClick={() => signClick(calculation, addToValue, "/")}
                className="number-button"
                disabled={sign === true}
              >
                /
              </Button>
            </ButtonGroup>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => numberClick("reset")}
                className="number-button"
              >
                reset
              </Button>
            </ButtonGroup>
          </div>
        </NumberButton>
      </Container>
    </Root>
  );
};

export default App;
