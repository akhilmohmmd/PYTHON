
import { useState } from 'react';
import Display from './Display';
import CalculatorButton from './CalculatorButton';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const buttons = [
    { label: 'AC', type: 'action' },
    { label: 'DEL', type: 'action' },
    { label: '%', type: 'operator' },
    { label: '÷', type: 'operator' },
    { label: '7' },
    { label: '8' },
    { label: '9' },
    { label: '×', type: 'operator' },
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '−', type: 'operator' },
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '+', type: 'operator' },
    { label: '0', type: 'zero' },
    { label: '.' },
    { label: '=', type: 'equal' }
  ];

  function calculate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '−') return a - b;
    if (op === '×') return a * b;
    if (op === '÷') return b === 0 ? 'Error' : a / b;
    if (op === '%') return b === 0 ? 'Error' : a % b;
    return b;
  }

  function handleNumber(value) {
    if (display === 'Error') {
      setDisplay(value === '.' ? '0.' : value);
      setWaitingForOperand(false);
      return;
    }

    if (waitingForOperand) {
      setDisplay(value === '.' ? '0.' : value);
      setWaitingForOperand(false);
    } else if (value === '.' && display.includes('.')) {
      return;
    } else {
      setDisplay(display === '0' && value !== '.' ? value : display + value);
    }
  }

  function handleOperator(nextOperator) {
    const inputValue = Number(display);

    if (display === 'Error') return;

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator && !waitingForOperand) {
      const result = calculate(previousValue, inputValue, operator);

      if (result === 'Error') {
        setDisplay('Error');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }

      setDisplay(String(Number(result.toPrecision(10))));
      setPreviousValue(result);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  }

  function handleEquals() {
    if (operator === null || previousValue === null || waitingForOperand) {
      return;
    }

    const result = calculate(previousValue, Number(display), operator);

    if (result === 'Error') {
      setDisplay('Error');
    } else {
      setDisplay(String(Number(result.toPrecision(10))));
    }

    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }

  function handleClick(value) {
    if (/^[0-9]$/.test(value) || value === '.') {
      handleNumber(value);
    } else if (value === 'AC') {
      setDisplay('0');
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (value === 'DEL') {
      if (display !== 'Error' && !waitingForOperand) {
        setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
      }
    } else if (value === '=') {
      handleEquals();
    } else {
      handleOperator(value);
    }
  }

  return (
    <div className="app">
      <div className="calculator">
        <h1>CALCULATOR</h1>

        <Display value={display} />

        <div className="button-grid">
          {buttons.map((button) => (
            <CalculatorButton
              key={button.label}
              label={button.label}
              type={button.type || ''}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


