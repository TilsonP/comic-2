import comicApi from "@/api/comicApi";
import { types } from "@/store/modules/comic/types";

const actions = {
  [types.actions.GET_RANDOM_COMIC]({ commit }) {
    // as of 30/06/2024 the api has 2952 comics available, the random number is limited.
    const id = Math.floor(Math.random() * 2952);
    commit(types.mutations.UPDATE_LOADING, true);
    return comicApi.getComic(id)
      .then((response) => {
        commit(types.mutations.UPDATE_COMIC, response.data);
      })
      .finally(() => commit(types.mutations.UPDATE_LOADING, false));
  },
  [types.actions.GET_SPECIFIC_COMIC]({ commit }, number) {
    commit(types.mutations.UPDATE_LOADING, true);
    return comicApi.getComic(number)
      .then((response) => {
        commit(types.mutations.UPDATE_COMIC, response.data);
      })
      .finally(() => commit(types.mutations.UPDATE_LOADING, false));
  },
  [types.actions.GET_RATED_COMICS]({ commit }) {
    if(localStorage.ratedComics) {
      commit(types.mutations.UPDATE_RATED_COMICS, localStorage.ratedComics);
    } else {
      localStorage.setItem('ratedComics', []);
    }
  },
  [types.actions.RATE_COMIC]({ commit }, payload) {
    let list = JSON.parse(localStorage.getItem('ratedComics') || '[]');
    const index = list.findIndex(item => item.num === payload.num);
    if (index !== -1) {
      list.splice(index, 1, payload);
    } else {
      list.push(payload);
    }

    localStorage.setItem('ratedComics', JSON.stringify(list));
    commit(types.mutations.UPDATE_RATED_COMICS, list);
  }
}

export default actions;