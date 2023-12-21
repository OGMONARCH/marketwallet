import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Voucher = () => {
  const [voucherData, setVoucherData] = useState([]);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getVoucherData();
  }, []);

  const getVoucherData = async () => {
    try {
      const response = await axios.get('https://backends-zgvg.onrender.com/api/generate');
      setVoucherData(response.data);
    } catch (error) {
      toast.error('Error fetching voucher data:', error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedVoucherId = event.target.voucher.value;

    try {
      const response = await axios.post('https://backends-zgvg.onrender.com/api/validate', {
        voucherCode: selectedVoucherId,
      });

      if (response.data.message === 'Voucher code is valid') {
        // Now you can use the voucher details from the backend response
        // to further process the payment or apply the discount.

        setMessage('Voucher validated successfully!');
      } else {
        setMessage('Error validating voucher: ' + response.data.message);
      }
    } catch (error) {
      toast.error('Error validating voucher:', error);
    }
  };

  return (
    <div>
      <h1>Voucher Payment Methods</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="voucher">Select Voucher:</label>
        <select id="voucher" name="voucher" required style={{height:'100%', width:'50%',padding: 20, border: 0, borderRadius: 20}}>
          {voucherData.map((voucher) => (
            <option key={voucher._id} value={voucher.code}>
              {voucher.code}
            </option>
          ))}
        </select>
        <br />
        <br/>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
          required
          style={{margin: 20, border: 5, borderRadius: 10, padding: 20, boxShadow: 20}}
        />
        <br />
        <button type="submit" style={{padding: 20, margin: 15, border: 10, borderRadius: 20, background: 'greenyellow'}}>Validate</button>
      </form>
      <p>{message}</p>
      <ToastContainer />
    </div>
  );
};

export default Voucher;
