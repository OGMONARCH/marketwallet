import React, { useState } from 'react';
import axios from 'axios';

function Login() {
 const [accountNumber, setAccountNumber] = useState('');
 const [userId, setUserId] = useState('');

 const validateAccountNumber = async () => {
    try {
      const response = await axios.post('/api/validate-account-number', {
        accountNumber,
        userId,
      });

      if (response.data.isValid) {
        console.log('Account number is valid.');
      } else {
        console.log('Account number is invalid.');
      }
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div>
      <h2>Login</h2>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
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
      <button onClick={validateAccountNumber}>Submit</button>
    </div>
 );
}

export default Login;