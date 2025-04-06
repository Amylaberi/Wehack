// src/components/MonthlyBudget.jsx

import React, { useState } from 'react';

function MonthlyBudget() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = income - expenses;
    setTotal(totalAmount);
  };

  return (
    <div>
      <h2>Monthly Budget</h2>
      <form onSubmit={handleSubmit}>
        <label>Income: </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <br />
        <label>Expenses: </label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          required
        />
        <br />
        <button type="submit">Calculate</button>
      </form>

      {total !== 0 && (
        <div>
          <h3>Total Budget: ${total}</h3>
        </div>
      )}
    </div>
  );
}

export default MonthlyBudget;
