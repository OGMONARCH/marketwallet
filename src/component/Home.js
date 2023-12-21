import React, { useState, useEffect } from 'react';
import '../Style/general.css';
import '../Style/global.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
 const [referredPeople, setReferredPeople] = useState(0);
 const [accountBalance, setAccountBalance] = useState(0);
 const [referralCode, setReferralCode] = useState('');
 const [referredUsers, setReferredUsers] = useState([]);


 const referToFriend = () => {
    setReferredPeople(referredPeople + 1);
    setReferredUsers([...referredUsers, ]);//{ id: e-mail, username }
 };

 const calculateLoyaltyRewards = () => {
    setAccountBalance(accountBalance + referredPeople * 100);            
 };

 const validateReferralCode = async (code) => {
   try {
      //need an API that can validate the referral codes
      //this guy will be in the sign-up page when we are merging the project
      //please add your logic here just using this as example.
      const response = await fetch('https://backends-zgvg.onrender.com/api/validateReferralCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
  
      if (response.ok) {
        console.log('Referral code is valid');
        toast.success(response)
      } else {
        toast.error('Referral code is invalid');
      }
   } catch (error) {
      toast.error(error);
   }
  };

  //main purpose here is that I want to be able to pull the userID that was referred so that it can be displayed on my dashboard
//   const handleChange = (e) => {
//    setNewUser(e.target.value);
//    };

   const handleRefer = () =>{
      setReferralCode() //code
   }

 const handleSubmit = (e) => {
    e.preventDefault();
    validateReferralCode(referralCode);
   //  referToFriend(newUser);
   //  setNewUser('');
 };


 return (
    <div>
      <div className="main">
        <span className='accountbalance'>Account Balance: ₦{accountBalance}</span>
        <span className='numberreferral'>Total Number of People Referred: {referredPeople}</span>
      </div>
      <div style={{display: 'flex', gap: 10}}>
      <button onClick={calculateLoyaltyRewards} style={{background: 'grey', padding: 15, margin: 10,border: 2, borderRadius: 15}}>Calculate Loyalty Rewards</button>
      <button onClick={referToFriend} style={{background: 'grey', padding: 15, margin: 10,border: 2, borderRadius: 15}}>Refer to a Friend</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          style={{width:'20%',height:'1rem',padding: 15, margin: 10,border: 2, borderRadius: 15}}
        />
        <br/>
        <button type="submit" onClick={(e)=> handleRefer(e)} style={{background: 'grey', padding: 15, margin: 10,border: 2, borderRadius: 15}}>Validate Referral Code</button>
      </form>
      {/* <div>
        <h3>Referred Users:</h3>
        <ul>
          {referredUsers.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div> */}
    </div>
 );
};

export default Home;
