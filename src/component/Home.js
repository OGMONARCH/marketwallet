import React, { useState } from 'react';
import axios from 'axios';
import '../Style/general.css';
import '../Style/global.css';

const Home = () => {
 const [referredPeople, setReferredPeople] = useState(0);
 const [accountBalance, setAccountBalance] = useState(0);
 const [referralCode, setReferralCode] = useState('');

 const referToFriend = () => {
    setReferredPeople(referredPeople + 1);
 };

 const calculateLoyaltyRewards = () => {
    setAccountBalance(accountBalance + referredPeople * 10);            
 };

 const validateReferralCode = async (code) => {
   try {
      //need an API that can validate the referral codes
      const response = await fetch('http://localhost:5000/validateReferralCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
  
      if (response.ok) {
        console.log('Referral code is valid');
      } else {
        console.error('Referral code is invalid');
      }
   } catch (error) {
      console.error(error);
   }
  };
  
 const handleSubmit = (e) => {
    e.preventDefault();
    validateReferralCode(referralCode);
 };

 return (
    <div>
      <div className="main">
        <span className='accountbalance'>Account Balance: ₦{accountBalance}</span>
        <span className='numberreferral'>Total Number of People Referred: {referredPeople}</span>
      </div>
      <button onClick={referToFriend}>Refer to a Friend</button>
      <button onClick={calculateLoyaltyRewards}>Calculate Loyalty Rewards</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
        />
        <button type="submit">Validate Referral Code</button>
      </form>
    </div>
 );
};

export default Home;