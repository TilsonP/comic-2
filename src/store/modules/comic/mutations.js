import { types } from "@/store/modules/comic/types";

const mutations = {
  [types.mutations.UPDATE_COMIC](state, payload) {
    state.comic = payload;
  },
  [types.mutations.UPDATE_LOADING](state, payload) {
    state.loading = payload;
  },
  [types.mutations.UPDATE_RATED_COMICS](state, payload) {
    state.ratedComics = payload;
  }
}

export default mutations;