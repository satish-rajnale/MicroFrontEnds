import React, { useEffect, useState } from 'react';
import { jwt, login } from './cart';

export default function CartContent() {
  const [token, settoken] = useState('');
  useEffect(() => {
    login('sally', '123');
    return jwt.subscribe((val) => settoken(val ?? ''));
  }, []);
  return <h1>JWT : {token}</h1>;
}
