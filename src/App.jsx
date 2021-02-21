import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

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
const NumberButtonGroup = styled.div`
  position: relative;

  .number-button-group {
  }
  .number-button {
    width: 76px;
    height: 72px;
  }
`;

const App = () => {
  const [firstNum, setFirstNum] = useState('0');
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleReset = () => {
    setFirstNum('0');
    setSecondNum(null);
    setOperator(null);
    setResult(null);
  };

  const handleClickOperator = (op) => {
    if (result !== null) {
      setFirstNum(result);
      setResult(null);
    }
    setOperator(op);
  };

  const handleClickNumber = (num) => {
    if (operator === null) {
      if (result) setResult(null);
      setFirstNum((prev) => {
        if (prev === '0') {
          if (num === '.') {
            return '0.';
          }

          return `${num}`;
        }

        return `${prev}${num}`;
      });
    } else {
      setSecondNum((prev) => {
        if (prev === '0' || prev === null) {
          if (num === '.') {
            return '0.';
          }

          return `${num}`;
        }

        return `${prev}${num}`;
      });
    }
  };

  const handleCalculate = (first, second, op) => {
    if (op === null) return;

    let temp;
    switch (op) {
      case 'plus':
        temp = first + second;
        break;
      case 'minus':
        temp = first - second;
        break;
      case 'multiply':
        temp = first * second;
        break;
      case 'divide':
        temp = first / second;
        break;
      default:
        return;
    }

    handleReset();
    setResult(Number.isInteger(temp) ? String(temp) : temp.toFixed(2));
  };

  const NumberButton = ({ num }) => {
    return (
      <Button onClick={() => handleClickNumber(num)} className="number-button">
        {num}
      </Button>
    );
  };

  return (
    <Root>
      <Container>
        Calculator
        {/* <div>firstNum: {firstNum && firstNum}</div>
        <div>secondNum: {secondNum}</div>
        <div>operator: {operator}</div>
        <div>result: {result && result}</div> */}
        <WindowNumber>
          <div className="value">
            {(() => {
              if (result) return result;
              if (secondNum) return secondNum;
              return firstNum;
            })()}
          </div>
        </WindowNumber>
        <NumberButtonGroup>
          <div className="number-button-group">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <NumberButton num={7} />
              <NumberButton num={8} />
              <NumberButton num={9} />
              <Button
                onClick={() => handleClickOperator('plus')}
                className="number-button"
                // disabled={sign === true}
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
              <NumberButton num={4} />
              <NumberButton num={5} />
              <NumberButton num={6} />
              <Button
                onClick={() => handleClickOperator('minus')}
                className="number-button"
                // disabled={sign === true}
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
              <NumberButton num={1} />
              <NumberButton num={2} />
              <NumberButton num={3} />
              <Button
                onClick={() => handleClickOperator('multiply')}
                className="number-button"
                // disabled={sign === true}
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
              <NumberButton num="." />
              <NumberButton num={0} />
              <Button
                onClick={() => {
                  handleCalculate(
                    Number(firstNum),
                    Number(secondNum),
                    operator,
                  );
                }}
                className="number-button"
                // disabled={sign === true}
              >
                =
              </Button>
              <Button
                onClick={() => handleClickOperator('divide')}
                className="number-button"
                // disabled={sign === true}
              >
                /
              </Button>
            </ButtonGroup>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => handleReset()} className="number-button">
                reset
              </Button>
            </ButtonGroup>
          </div>
        </NumberButtonGroup>
      </Container>
    </Root>
  );
};

export default App;
