export default {
  setData ({ commit }) {
    let phoneData = JSON.parse(localStorage.getItem('phoneData') || '[]');
    const totalPrice = Number(localStorage.getItem('totalPrice') || '0'),
          totalMount = Number(localStorage.getItem('totalMount') || '0'),
          cartData = JSON.parse(localStorage.getItem('cartData') || '[]');

    phoneData = phoneData.map((item) => {
      const picsData = JSON.parse(item.pics);
      item.img = picsData[0][0][0];
      return item;
    });

    commit('SET_DATA', {
      phoneData,
      totalPrice,
      totalMount,
      cartData
    })
  },
  setTotal ({ commit }, payload) {
    commit('SET_TOTAL', payload);
  },
  setCart ({ commit }, payload) {
    commit('SET_CART', payload);
  }
}