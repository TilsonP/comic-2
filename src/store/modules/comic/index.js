import { state } from './state';
import { MODULE_COMIC } from "@/store/modules/comic/types";
import actions from "@/store/modules/comic/actions";
import mutations from "@/store/modules/comic/mutations";

export const module = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export const name = MODULE_COMIC;