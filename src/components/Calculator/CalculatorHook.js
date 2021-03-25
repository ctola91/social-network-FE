import { useState } from 'react';

import './Calculator.css';

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleResult = () => {
    setResult(Number(number1) + Number(number2));
  };

  return (
    <div className="Calculator">
      <p>
        <input name="number1" type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
        +
        <input name="number2" type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
        <button type="button" onClick={handleResult}>
          =
        </button>
      </p>
      <p className="result">{result}</p>
    </div>
  );
};

export default Calculator;
