export const MODULE_COMIC = '@modules/comic';

export const types = {
  PATH: `${MODULE_COMIC}`,
  actions: {
    GET_RANDOM_COMIC: '@actions/GET_RANDOM_COMIC',
    GET_SPECIFIC_COMIC: '@actions/GET_SPECIFIC_COMIC',
    RATE_COMIC: '@actions/RATE_COMIC',
    GET_RATED_COMICS: '@actions/GET_RATED_COMICS',
  },
  mutations: {
    UPDATE_COMIC: '@actions/UPDATE_COMIC',
    UPDATE_LOADING: '@actions/UPDATE_LOADING',
    UPDATE_RATED_COMICS: '@actions/UPDATE_RATED_COMICS',
  },
}