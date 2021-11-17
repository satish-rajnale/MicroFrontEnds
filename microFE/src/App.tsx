import React from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
import Counter from 'remoteFE/Counter';
import './index.scss';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: microFE</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
