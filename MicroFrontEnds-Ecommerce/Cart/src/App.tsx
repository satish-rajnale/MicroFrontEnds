import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { jwt, login } from './cart';
import './index.scss';

const App = () => {
  const [currentJwt, setcurrentJwt] = useState(jwt.value);
  useEffect(() => {
    jwt.subscribe(setcurrentJwt);
    login('sally', '123');
    return () => {};
  }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <h1>JWT: {currentJwt}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
