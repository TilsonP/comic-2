import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import comic from '../__mocks__/comic';
import ImageCard from "@/components/imageCard.vue";
import { types } from "@/store/modules/comic/types";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('InfoCard.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        [types.PATH]: {
          namespaced: true,
          state: {
            comic
          },
        }
      }
    });
  });

  it('renders comic title correctly', () => {
    const view = shallowMount(ImageCard, { store, localVue });
    const title = view.find('.container-title__title').text();
    expect(title).toBe(comic.title);
  });

  it('renders comic image correctly', () => {
    const view = shallowMount(ImageCard, { store, localVue });
    const img = view.find('img');
    expect(img.attributes('src')).toBe(comic.img);
  });
});
