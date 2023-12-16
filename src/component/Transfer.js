import React, { useState } from 'react';
import axios from 'axios';

function Transfer() {
 const [amount, setAmount] = useState('');
 const [accountNumber, setAccountNumber] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/transfer', {
        amount,
        accountNumber,
      });

      if (response.data.success) {
        alert('Transaction successful');
      } else {
        alert('Transaction failed');
      }
    } catch (error) {
      console.error(error);
      alert('Transaction failed');
    }
 };

 return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
 );
}

export default Transfer;