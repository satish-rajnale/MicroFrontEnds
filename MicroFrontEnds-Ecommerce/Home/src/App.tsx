import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HomeContent from './HomeContent';
import Header from './Header';
import Footer from './Footer';
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{ name: 'Home' }} />
    <HomeContent />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
