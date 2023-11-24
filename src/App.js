import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, serPercenatage1] = useState(0);
  const [percentage2, serPercenatage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    serPercenatage1(0);
    serPercenatage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={serPercenatage1}>
        How didi you like your service ?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={serPercenatage2}>
        How did your friend like the service ?{" "}
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>
        How much was the bill ?
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Disatisfied(0%)</option>
        <option value="5">It was ok(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutly amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const total = bill + tip;
  return (
    <h3>
      You pay ${total} (${bill} + ${tip}(tip))
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <button
      onClick={() => {
        onReset();
      }}
    >
      Reset
    </button>
  );
}
