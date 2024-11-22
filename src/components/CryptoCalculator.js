import React, { useState } from "react";
import "./CryptoCalculator.css";

function CryptoCalculator() {
  const [initialPrice, setInitialPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [total, setTotal] = useState("");
  const [profit, setProfit] = useState("");
  const [warning, setWarning] = useState("");

  const formatNumber = (value) => {
    if (!value) return "";
    return parseFloat(value).toLocaleString("en-US");
  };

  const handleInputChange = (setter) => (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(rawValue)) {
      setter(rawValue);
    }
  };

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
    setTotal(`Total = $${formatNumber(currentValue.toFixed(2))}`);
    setProfit(`Profit = $${formatNumber(netProfit.toFixed(2))}`);
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
              autoFocus
              type="text"
              placeholder="$"
              id="initial-price"
              value={formatNumber(initialPrice)}
              onChange={handleInputChange(setInitialPrice)}
            />
          </div>

          <div>
            <label className="calc-label" htmlFor="investment">
              Investment:
            </label>
            <input
              type="text"
              id="investment"
              placeholder="$"
              value={formatNumber(investment)}
              onChange={handleInputChange(setInvestment)}
            />
          </div>

          <div>
            <label className="calc-label" htmlFor="new-price">
              New Price:
            </label>
            <input
              type="text"
              id="new-price"
              placeholder="$"
              value={formatNumber(newPrice)}
              onChange={handleInputChange(setNewPrice)}
            />
          </div>

          <button type="submit" className="btn calc-submit-btn">
            Calculate
          </button>
        </form>

        {warning && <span className="warning">{warning}</span>}
        <div className="totalPrice">
          <p className="calc-total">{total}</p>
          <p className="calc-profit">{profit}</p>
        </div>
      </div>
    </main>
  );
}

export default CryptoCalculator;
