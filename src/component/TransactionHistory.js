import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionHistory() {
 const [transactions, setTransactions] = useState([]);

 useEffect(() => {
    getTransactions();
 }, []);

 const getTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.description}</li>
        ))}
      </ul>
    </div>
 );
}

export default TransactionHistory;