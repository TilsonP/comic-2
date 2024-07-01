import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import comic from '../__mocks__/comic';
import qualifyCard from '@/components/qualifyCard.vue';
import { types } from '@/store/modules/comic/types';
import star_selected from '@/assets/images/star_selected.svg';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('qualifyCard.vue', () => {
  let store;
  let actions;

  beforeEach(() => {

    actions = {
      [types.actions.RATE_COMIC]: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        [types.PATH]: {
          namespaced: true,
          state: {
            comic
          },
          actions
        }
      }
    });

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([{ num: 2, rating: 4 }])),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  it('renders correctly', () => {
    const view = shallowMount(qualifyCard, { store, localVue });
    expect(view.exists()).toBe(true);
    expect(view.findAll('input[type="radio"]').length).toBe(5);
    expect(view.findAll('label img').at(0).attributes('src')).toBe(star_selected);
  });

  it('updates rating when a star is clicked', async () => {
    const view = shallowMount(qualifyCard, { store, localVue });
    const radio = view.find('input#star5');
    await radio.setChecked();
    expect(view.vm.rating).toBe("5");
  });

  it('calls rateComic action when rating is changed', async () => {
    const view = shallowMount(qualifyCard, { store, localVue });
    const radio = view.find('input#star5');
    await radio.setChecked();
    expect(actions[types.actions.RATE_COMIC]).toHaveBeenCalled();
    expect(actions[types.actions.RATE_COMIC].mock.calls[0][1]).toEqual({ num: 2, rating: "5" });
  });
});
