import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';
import CartContent from './CartContent';
import Header from 'home/Header';
import Footer from 'home/Footer';
import './index.scss';
import Login from './Login.jsx';
import MiniCart from './MiniCart.jsx';

const App = () => {
  // const [currentJwt, setcurrentJwt] = useState(jwt.value);
  // useEffect(() => {
  //   jwt.subscribe(setcurrentJwt);
  //   login('sally', '123');
  //   return () => {};
  // }, []);
  return (
    <div className=" mx-auto max-w-6xl">
      <Header />

      <div className="my-10">
        <CartContent />
        <Login />
        <MiniCart />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
