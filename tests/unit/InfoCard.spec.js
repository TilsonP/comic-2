import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import InfoCard from '@/components/infoCard.vue';
import comic from '../__mocks__/comic';
import { types } from '@/store/modules/comic/types';

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

  it('renders comic number correctly', () => {
    const view = shallowMount(InfoCard, { store, localVue });
    const num = view.find('td').text();
    expect(num).toBe(comic.num.toString());
  });

  it('renders comic title correctly', () => {
    const view = shallowMount(InfoCard, { store, localVue });
    const title = view.findAll('td').at(1).text();
    expect(title).toBe(comic.title);
  });

  it('renders comic create date correctly', () => {
    const view = shallowMount(InfoCard, { store, localVue });
    const createDate = view.findAll('td').at(2).text();
    const expectedDate = `${comic.day}/${comic.month}/${comic.year}`;
    expect(createDate).toBe(expectedDate);
  });

  it('renders comic transcript correctly', () => {
    const view = shallowMount(InfoCard, { store, localVue });
    const transcript = view.find('.container-info-card__transcript-content').html();
    const expectedTranscript = comic.transcript.replace(/\n/g, '<br>');
    expect(transcript).toContain(expectedTranscript);
  });
});
