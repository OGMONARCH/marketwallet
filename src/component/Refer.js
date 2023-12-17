import React, { useState } from 'react';
import "../Style/global.css";
import '../Style/general.css';


function Refer() {
    const [referredEmail, setReferredEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/refer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ referredEmail }),
            });
            if (response.ok) {
                console.log('Referral successful');
            } else {
                console.log('Referral failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={referredEmail}
                        onChange={(e) => setReferredEmail(e.target.value)}
                    />
                </label>
                <button type="submit">Refer</button>
            </form>
        </div>
    );
}

export default Refer;