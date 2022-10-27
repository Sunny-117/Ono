function setStorage (data) {
  const { totalMount, totalPrice, cartData } = data;

  localStorage.setItem('totalMount', totalMount);
  localStorage.setItem('totalPrice', totalPrice);
  localStorage.setItem('cartData', JSON.stringify(cartData));
}

export {
  setStorage
}