import React, { useState } from 'react';
import axios from 'axios';

//How fa don't use this one ooo.
//was just testimng it out

const WalletTransfer = () => {
 const [transferAmount, setTransferAmount] = useState('');
 const [transferAccountNumber, setTransferAccountNumber] = useState('');
 const [transactionResult, setTransactionResult] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/transfer', {
        transferAmount,
        transferAccountNumber,
      });

      setTransactionResult(response.data.message);
    } catch (error) {
      setTransactionResult('Transfer failed. Please try again.');
    }
 };

 return (
    <div>
      <h3>Wallet Transfer</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Transfer Amount:
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Transfer Account Number:
          <input
            type="text"
            value={transferAccountNumber}
            onChange={(e) => setTransferAccountNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Transfer</button>
      </form>
      {transactionResult && <p>{transactionResult}</p>}
    </div>
 );
};

export default WalletTransfer;

//Might end up moving this to the homepage tho.

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const WalletDashboard = () => {
//  const [accountBalance, setAccountBalance] = useState(0);
//  const [recentTransactions, setRecentTransactions] = useState([]);

//  useEffect(() => {
//     axios.get('/api/account')
//       .then(response => {
//         setAccountBalance(response.data.balance);
//         setRecentTransactions(response.data.recentTransactions);
//       });
//  }, []);

//  return (
//     <div>
//       <h2>Account Balance: ${accountBalance}</h2>
//       <h3>Recent Transactions</h3>
//       <ul>
//         {recentTransactions.map(transaction => (
//           <li key={transaction.id}>
//             {transaction.type}: ${transaction.amount} - {transaction.date}
//           </li>
//         ))}
//       </ul>
//     </div>
//  );
// };

// export default WalletDashboard;



//Was trying to create a more user friendly interface but not sure how I want to go about it yet.
//So this is just a prototype😅
// import React, { useState } from 'react';

// const DynamicComponent = () => {
//  const [userInput, setUserInput] = useState('');

//  const handleChange = (e) => {
//     setUserInput(e.target.value);
//  };

//  return (
//     <div>
//       <input type="text" value={userInput} onChange={handleChange} />
//       <h2>Your Input: {userInput}</h2>
//     </div>
//  );
// };

// export default DynamicComponent;


//import React from 'react';
// import DynamicComponent from './DynamicComponent';

// const ParentComponent = () => {
//  const userName = 'John Doe';

//  return (
//     <div>
//       <h1>Welcome, {userName}!</h1>
//       <DynamicComponent userName={userName} />
//     </div>
//  );
// };

// export default ParentComponent;