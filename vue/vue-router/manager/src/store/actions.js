import { getUserRouters } from "../services";
import { formatRouterTree } from '../libs/utils';

export default {
  async setUserRouters ({ commit, state }) {
    const userRouters = await getUserRouters(state.uid),
          payload = formatRouterTree(userRouters);

    commit('setUserRouters', payload);
    commit('setAuth', true);
  }
}