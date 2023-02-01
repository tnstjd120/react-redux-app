import React from 'react';
import './App.css';

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  return (
    <div className="App">

      <button onClick={onIncrement}>+</button>
      <span>{value}</span>
      <button onClick={onDecrement}>-</button>

    </div>
  );
}

export default App;
