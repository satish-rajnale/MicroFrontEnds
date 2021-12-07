import React from 'react';
import Login from 'cart/Login';
export default () => (
  <div className="p-5 bg-blue-500 text-white text-3xl ">
    <div className="flex">
      <div className="flex-grow">Header start world</div>
      <div className="flex-end relative">
        <Login />
      </div>
    </div>
  </div>
);
