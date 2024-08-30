import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './page/Landingpage';
import LoginPage from './page/Loginpage';
import SignUp from './page/SignUp';
import DashboardPage from './page/ DashboardPage';

import './App.css'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardPage/>} />
    </Routes>
    </>
  )
}

export default App
