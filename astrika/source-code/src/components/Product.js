import React from 'react'

function Product({item}) {
    return (
        <div className="product">
            <h5>{item.name}</h5>
            <p>{item.price}</p>
        </div>
    )
}

export default React.memo(Product)
