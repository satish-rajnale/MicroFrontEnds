import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from 'home/Header';
// const Footer = React.lazy(() => import('home/Footer'));
import Footer from 'home/Footer';
import './index.scss';
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [load, setLoad] = useState(false);
  function importMyHeader() {
    setLoad(true);
  }
  return (
    <Router>
      <div className="mx-auto max-w-6xl">
        <Header app={{ name: 'Älien' }} />

        <button onClick={importMyHeader}>Load Header</button>
        <div>Name: reacthostApp</div>
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
