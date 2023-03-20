import React from 'react';
import {BrowserRouter as Router,Route, Routes} from  "react-router-dom";
import './App.css';
import Header from './Component/Header';
import Coins  from './Component/Coins';
import Exchanges from './Component/Exchanges';
import Home from './Component/Home';
import CoinDetail from './Component/CoinDetail';
import Footer from './Component/Footer';
import NewsM from './Component/NewsM';
function App() {
  return (
   <Router>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin' element={<Coins/>}/>
      <Route path='/exchanges' element={<Exchanges/>}/>
      <Route path='/coin/:id' element={<CoinDetail/>}/>
      <Route path='/NewsM' element={<NewsM/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
