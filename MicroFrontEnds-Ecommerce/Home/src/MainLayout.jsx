import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from 'pdp/PDPContent';
import HomeContent from './HomeContent';
import CartContent from 'cart/CartContent';

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route exact path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
