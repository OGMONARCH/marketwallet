import React, { useState, useEffect } from 'react';
import "./Style/global.css";
import './Style/general.css';
import Navbar from './Navbar';

function ReferralInfo() {
    const [referralData, setReferralData] = useState(null);

    useEffect(() => {
        fetchReferralData();
    }, []);

    const fetchReferralData = async () => {
        try {
            const response = await fetch('/api/referral-data');
            if (response.ok) {
                const data = await response.json();
                setReferralData(data);
            } else {
                console.log('Failed to fetch referral data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!referralData) {
        return <div>Loading referral data...</div>;
    }

    return (
        <div>
            <Navbar />
            <h2>Referral Information</h2>
            <p>Number of referrals: {referralData.referralCount}</p>
            <p>Referred person: {referralData.referredEmail}</p>
        </div>
    );
}

export default ReferralInfo;