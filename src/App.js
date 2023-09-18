import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import All from './Components/All';
import Header from './Components/Header';
import Stocks from './Components/Stocks';
import Technology from './Components/Technology';
import India from './Components/India';
import Sports from "./Components/Sports";
import Entertainment from "./Components/Entertainment";
import Panchang from './Components/Panchang';



function App() {
      return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<All/>} exact/>
        <Route path="/India" element={<India/>} exact/>
        <Route path="/Technology" element={<Technology />} exact/>
        <Route path="/Stocks" element={<Stocks />} exact/>
        <Route path="/Sports" element={<Sports />} exact/>
        <Route path="/entern" element={<Entertainment />} exact/>
        <Route path="/panch" element={<Panchang />} exact/>
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;
