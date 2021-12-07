import React, { useEffect, useState } from 'react';
import { currency, getProducts } from './products';

function HomeContent() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts().then(setproducts);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />

          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
