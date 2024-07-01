import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SearchCard from '@/components/SearchCard.vue';
import { types } from '@/store/modules/comic/types';
import comic from "../__mocks__/comic";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchCard.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      [types.actions.GET_RANDOM_COMIC]: jest.fn(),
      [types.actions.GET_SPECIFIC_COMIC]: jest.fn((context, number) => {
        comic.num = number;
      })
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
  });

  it('renders correctly', () => {
    const view = shallowMount(SearchCard, { store, localVue });
    expect(view.exists()).toBe(true);
    expect(view.find('input[type="number"]').exists()).toBe(true);
    expect(view.find('button[type="button"]').exists()).toBe(true);
  });

  it('enables search button only when number is valid', async () => {
    const view = shallowMount(SearchCard, { store, localVue });
    const input = view.find('input[type="number"]');

    await input.setValue(0);
    expect(view.find('button[type="button"]').attributes('disabled')).toBe('disabled');

    await input.setValue(1);
    expect(view.find('button[type="button"]').attributes('disabled')).toBe(undefined);

    await input.setValue(2501);
    expect(view.find('button[type="button"]').attributes('disabled')).toBe('disabled');
  });

  it('calls getSpecificComic action when search button is clicked', async () => {
    const view = shallowMount(SearchCard, { store, localVue });
    view.setData({ number: 100 });
    await view.find('button[type="button"]').trigger('click');
    expect(actions[types.actions.GET_SPECIFIC_COMIC]).toHaveBeenCalled();
    expect(actions[types.actions.GET_SPECIFIC_COMIC].mock.calls[0][1]).toBe(100);
  });
});
