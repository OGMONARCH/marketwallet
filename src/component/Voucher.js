import React, { useState, useEffect } from 'react';
import { Toast } from 'react-toastify/dist/components';
import axios from 'axios';

const Voucher = () => {
    const [voucherData, setVoucherData] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        getVoucherData();
    }, []);

    const getVoucherData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/vouchers');
            setVoucherData(response.data);
        } catch (error) {
            console.error('Error fetching voucher data:', error);
        }
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const selectedVoucher = voucherData.find(
            (voucher) => voucher.id === event.target.id.value
        );

        if (!selectedVoucher) {
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/vouchers/redeem', {
                voucherId: selectedVoucher.id,
                amount,
            });

            if (response.data.status === 'success') {
                setMessage('Voucher redeemed successfully!');
            } else {
                setMessage('Error redeeming voucher: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error redeeming voucher:', error);
        }
    };

    return (
        <div>
            <h1>Voucher Payment Methods</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="voucher">Select Voucher:</label>
                <select id="voucher" name="id" required>
                    {voucherData.map((voucher) => (
                        <option key={voucher.id} value={voucher.id}>
                            {voucher.name}
                        </option>
                    ))}
                </select>
                <br />
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                />
                <br />
                <button type="submit">Redeem</button>
            </form>
            <Toast />
        </div>
    );
};

export default Voucher;