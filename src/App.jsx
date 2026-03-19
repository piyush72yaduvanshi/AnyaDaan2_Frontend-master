// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from "./components/Auth/Signup";
import Header from "./components/Header";
import Login from "./components/Auth/Login";
import AuthProvider from "./AuthProvider";
import About from "./components/Pages/About";
import Contribute from "./components/Pages/Contribute";
import ThankYou from "./components/Pages/ThankYou";
import RecentDonations from "./components/Pages/RecentDonations";
import ContributionBoard from "./components/Pages/ContributionBoard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import { useContext } from "react";
import './App.css'
import VerifiedNgo from "./components/Admin/VerifiedNgo";

function App() {


  return (
    <AuthProvider>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contribute" element={<Contribute/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
          <Route path="/recentDonations" element={<RecentDonations/>}/>
          <Route path="/contributionBoard" element={<ContributionBoard/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/verifiedngo" element={<VerifiedNgo/>}/>
          
        </Routes>
      
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
