import React from 'react';
import "./Style/global.css";
import './Style/general.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Transfer from './component/Transfer';
import TransactionHistory from './component/TransactionHistory';

function App() {
 return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
 );
}

export default App;


//May need to implement this😪

// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//  <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//       )
//     }
//  />
// );

// const App = () => {
//  const isAuthenticated = true; // this will be from authentication service

//  return (
//     <Router>
//       <ProtectedRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} />
//       <Route path="/login" component={Login} />
//     </Router>
//  );
// };

// export default App;

//trying to autogenerate a new userID and Accountnumber using the uuidv4 function from the uuid package
//But a bit against it bcause of the length of the UUIDs(simply to long and consumes storage. It may also
//require longer time to retrieve)
// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// function App() {
//  const [userId, setUserId] = useState('');
//  const [accountNumber, setAccountNumber] = useState('');

//  useEffect(() => {
//     setUserId(uuidv4());
//     setAccountNumber(uuidv4());
//  }, []);

//  return (
//     <div className="App">
//       <h1>Welcome to our Banking Application!</h1>
//       <p>Your User ID is: {userId}</p>
//       <p>Your Account Number is: {accountNumber}</p>
//     </div>
//  );
// }

// export default App;


//we could also use 
// const uniqueID = Date.now()
//since it renders the milliseconds that have fasted...
//
// One of the disadvantages of using this tho is that incases when transcations and registration happen to occur at the sametime, 
//It could either lead to data loss or corruption..

//Then I want to put the register and the login in first so that it could directly lead to the in app wallet or should I just scrapn it add implement the auto userID and AccountNumber generation when we 
//merging?
