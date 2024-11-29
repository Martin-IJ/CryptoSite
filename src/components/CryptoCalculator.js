import React, { useState, useEffect } from "react";
import { GoInfo } from "react-icons/go";
import axios from "axios";
import "./CryptoCalculator.css";

function CryptoCalculator() {
  const [initialPrice, setInitialPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [total, setTotal] = useState("");
  const [profit, setProfit] = useState("");
  const [warning, setWarning] = useState("");
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("select");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCoinChange = (e) => {
    const coinId = e.target.value;
    setSelectedCoin(coinId);

    if (coinId !== "select") {
      const selected = coins.find((coin) => coin.id === coinId);
      if (selected) {
        setNewPrice(selected.current_price);
      }
    } else {
      setNewPrice("");
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
    setTotal(`Total: $${Number(currentValue.toFixed(2)).toLocaleString()}`);
    setProfit(`Profit: $${Number(netProfit.toFixed(2)).toLocaleString()}`);
  };

  return (
    <main className="calc-container">
      <div className="info">
        <GoInfo className="info-icon" />
        <p className="explanation">
          Select a coin from the dropdown to auto-fill the New Price (optional)
          or enter it manually. Provide the Initial Price and your Investment
          Amount, then click Calculate to view your profit or loss.
        </p>
      </div>
      <div className="calc-cont">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="calc-label" htmlFor="coin-select">
              Select Coin:
            </label>
            <select
              id="coin-select"
              value={selectedCoin}
              onChange={handleCoinChange}
            >
              <option value="select">--- Select coin ---</option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="calc-label" htmlFor="initial-price">
              Initial Price:
            </label>
            <input
              autoFocus
              type="number"
              placeholder="$"
              id="initial-price"
              value={initialPrice}
              onChange={(e) => setInitialPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="calc-label" htmlFor="investment">
              Investment:
            </label>
            <input
              type="number"
              id="investment"
              placeholder="$"
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
              placeholder="$"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              readOnly={selectedCoin !== "select"}
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
