// src/components/CreateAccount.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // For navigation after account creation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account created with:", email, password);
    navigate('/login');  // After creating account, navigate to login page
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
