import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { jwt, login } from './cart';
import CartContent from './CartContent';
import Header from 'home/Header';
import Footer from 'home/Footer';
import './index.scss';

const App = () => {
  // const [currentJwt, setcurrentJwt] = useState(jwt.value);
  // useEffect(() => {
  //   jwt.subscribe(setcurrentJwt);
  //   login('sally', '123');
  //   return () => {};
  // }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="mt-10">
        <CartContent />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
