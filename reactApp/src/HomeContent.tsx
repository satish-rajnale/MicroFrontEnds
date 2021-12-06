import React, { useEffect, useState } from 'react';
import { getProducts } from './products';

function HomeContent() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts().then(setproducts);
  }, []);
  return <div></div>;
}

export default HomeContent;
