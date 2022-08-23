/**
 * Adding items to cart
 * @param items
 * @returns {Promise<any>}
 */
window.addToCart = (items) => {
  return fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  }).then((response) => response.json());
};