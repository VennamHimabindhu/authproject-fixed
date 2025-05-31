import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
