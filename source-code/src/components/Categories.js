import React, { useMemo } from "react";
import Product from "./Product";

function Categories({ data, inStockCheck }) {
  const { items } = data;
  const inStockItems = useMemo(() => {
    return items.filter((obj) => obj.inStock === true);
  }, [items]);
 
  return (
    <div className="departments">
      <h3>{data.category}</h3>
      {inStockCheck
        ? inStockItems.map((product, index) => (
            <Product key={index} item={product} />
          ))
        : items.map((product, index) => (
            <Product key={index} item={product} />
          ))}
    </div>
  );
}

export default React.memo(Categories);
