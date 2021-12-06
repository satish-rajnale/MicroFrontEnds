import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Header = React.lazy(() => import('home/Header'));
// const Footer = React.lazy(() => import('home/Footer'));
import Footer from 'home/Footer';
import './index.scss';
import SafeComponent from './SafeComponent';

const App = () => {
  const [load, setLoad] = useState(false);
  function importMyHeader() {
    setLoad(true);
  }
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {/* <Header app={{ name: 'Älien' }} /> */}
      {load && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Header app={{ name: 'Älien' }} />
        </React.Suspense>
      )}
      <button onClick={importMyHeader}>Load Header</button>
      <div>Name: reacthostApp</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
