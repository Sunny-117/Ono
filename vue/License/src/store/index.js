import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

export default Vuex.createStore({
  state,
  mutations,
});
