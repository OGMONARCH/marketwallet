import React, { useState } from 'react';

const Register = () => {
 const [userID, setUserID] = useState('');
 const [accountNumber, setAccountNumber] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or perform necessary actions here
    console.log('UserID:', userID);
    console.log('Account number:', accountNumber);
 };

 const generateAccountNumber = () => {
    const newAccountNumber = `ACC${userID}`;
    setAccountNumber(newAccountNumber);
 };

 return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} />
        </label>
        <label>
          Account Number:
          <input type="text" value={accountNumber} readOnly />
        </label>
        <button type="button" onClick={generateAccountNumber}>Generate Account Number</button>
        <button type="submit">Submit</button>
      </form>
    </div>
 );
};

export default Register;