import React, { useState } from "react";
import "./CryptoCalculator.css";

function CryptoCalculator() {
  const [initialPrice, setInitialPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [result, setResult] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const initial = parseFloat(initialPrice);
    const invest = parseFloat(investment);
    const newP = parseFloat(newPrice);

    if (
      isNaN(initial) ||
      isNaN(invest) ||
      isNaN(newP) ||
      initial <= 0 ||
      invest <= 0
    ) {
      setWarning("Please enter valid numbers greater than zero.");
      return;
    }

    const coinBought = invest / initial;
    const currentValue = coinBought * newP;
    const netProfit = currentValue - invest;

    setWarning("");
    setResult(
      `Total = $${currentValue.toFixed(2)}. Profit = $${netProfit.toFixed(2)}`
    );
  };

  return (
    <main className="calc-container">
      <div className="calc-cont">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="calc-label" htmlFor="initial-price">
              Initial Price:
            </label>
            <input
              type="number"
              id="initial-price"
              value={initialPrice}
              onChange={(e) => setInitialPrice(e.target.value)}
              autoFocus
            />
          </div>

          <div>
            <label className="calc-label" htmlFor="investment">
              Investment:
            </label>
            <input
              type="number"
              id="investment"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
          </div>

          <div>
            <label className="calc-label" htmlFor="new-price">
              New Price:
            </label>
            <input
              type="number"
              id="new-price"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn calc-submit-btn">
            Calculate
          </button>
        </form>

        {warning && <span className="warning">{warning}</span>}
        <p className="calc-result">{result}</p>
      </div>
    </main>
  );
}

export default CryptoCalculator;
