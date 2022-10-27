export default {
  SET_DATA (state, data) {
    const { phoneData, totalPrice, totalMount, cartData } = data;

    state.phoneData = phoneData;
    state.totalPrice = totalPrice;
    state.totalMount = totalMount;
    state.cartData = cartData;
  },
  SET_TOTAL (state, payload) {
    const { price, type } = payload;

    switch (type) {
      case 'PLUS':
        state.totalPrice += price;
        state.totalMount += 1;
        break;
      case 'MINUS':
        state.totalPrice -= price;
        state.totalMount -= 1;
        break;
      default:
        break;
    }
  },
  SET_CART (state, payload) {
    const {
      id, 
      price,
      type,
      name,
      slogan,
      img
    } = payload;

    const index = state.cartData.findIndex(item => Number(item.id) === id);

    if (index === -1) {
      state.cartData.push({
        id,
        price,
        type,
        name,
        slogan,
        img,
        totalMount: 1,
        totalPrice: price
      })
    } else {
      switch (type) {
        case 'PLUS':
          state.cartData[index].totalMount += 1;
          state.cartData[index].totalPrice += price;
          break;
        case 'MINUS':
          state.cartData[index].totalMount -= 1;
          state.cartData[index].totalPrice -= price;

          if (!state.cartData[index].totalMount) {
            state.cartData = state.cartData.filter(item => item.id !== id);
          }
          break;
        default:
          break;
      }
    }
  }
}