// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import MonthlyBudget from './components/MonthlyBudget';
import './App.css';  // Adjust the path to match your CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={

            // In App.jsx or any component JSX

            <div className="centered-text">
            <h1>Welcome to Budget Tracker!</h1>
              <nav>
                <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/create-account">Create Account</Link></li>
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<MonthlyBudget />} />
      </Routes>
    </Router>
  );
}

export default App;
