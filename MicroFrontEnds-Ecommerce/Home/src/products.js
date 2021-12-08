const API_SERVER = 'http://localhost:4000';

export const getProducts = () =>
  fetch(`${API_SERVER}/products`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.log(res);
    res.json();
  });

export const getProductById = (id) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
