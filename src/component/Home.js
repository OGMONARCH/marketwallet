import React, { useState } from 'react';

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

 const validateReferralCode = (code) => {
    // Implement referral code validation logic here
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    validateReferralCode(referralCode);
 };

 return (
    <div>
      <div className="main">
        <h2>Account Balance: {accountBalance}</h2>
        <h2>Total Number of People Referred: {referredPeople}</h2>
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