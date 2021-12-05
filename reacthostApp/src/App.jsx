import React from 'react';
import ReactDOM from 'react-dom';
const Header = React.lazy(() => import('home/Header'));
const Footer = React.lazy(() => import('home/Footer'));
import './index.scss';
import SafeComponent from './SafeComponent';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <Header app={{ name: 'Älien' }} /> */}
    <React.Suspense fallback={<div>Loading...</div>}>
      <SafeComponent>
        <Header />{' '}
      </SafeComponent>
      <div>Name: reacthostApp</div>
      <Footer />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
