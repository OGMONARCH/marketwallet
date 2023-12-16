import React from 'react';
import "./Style/global.css";
import './Style/general.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Refer from './component/Refer';
import Transfer from './component/Transfer';
import TransactionHistory from './component/TransactionHistory';
import Login from './component/Login';
import Register from './component/Register';
import Rewards from './component/Rewards';

function App() {
 return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </BrowserRouter>
    </div>
 );
}

export default App;