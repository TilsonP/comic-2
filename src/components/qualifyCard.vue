<template>
  <div class="container-qualify">
    <div class="container-qualify__rating">
      <input type="radio" id="star5" name="rating" value="5" v-model="rating"/>
      <label for="star5" title="5 stars"><img :src="starSelected" alt="5 stars"/></label>

      <input type="radio" id="star4" name="rating" value="4" v-model="rating"/>
      <label for="star4" title="4 stars"><img :src="starSelected" alt="4 stars"/></label>

      <input type="radio" id="star3" name="rating" value="3" v-model="rating"/>
      <label for="star3" title="3 stars"><img :src="starSelected" alt="3 stars"/></label>

      <input type="radio" id="star2" name="rating" value="2" v-model="rating"/>
      <label for="star2" title="2 stars"><img :src="starSelected" alt="2 stars"/></label>

      <input type="radio" id="star1" name="rating" value="1" v-model="rating"/>
      <label for="star1" title="1 stars"><img :src="starSelected" alt="1 stars"/></label>
    </div>
  </div>
</template>

<script>
import star_selected from '@/assets/images/star_selected.svg'
import { mapActions, mapState } from "vuex";
import { types } from "@/store/modules/comic/types";

export default {
  name: "qualifyCard",
  data() {
    return {
      rating: 0,
      starSelected: star_selected,
    };
  },
  computed: {
    ...mapState(types.PATH, ['comic', 'ratedComics']),
  },
  watch: {
    rating(value) {
      if (this.comic) {
        const payload = {
          num: this.comic.num,
          rating: value,
        }
        this.rateComic(payload);
      }
    }
  },
  methods: {
    ...mapActions(types.PATH, {
      rateComic: types.actions.RATE_COMIC,
    }),
  },
  mounted() {
    const ratedComicsList = JSON.parse(localStorage.getItem('ratedComics')) || [];
    const ratedComic = ratedComicsList.find(item => item.num === this.comic.num);
    if (ratedComic) {
      this.rating = ratedComic.rating;
    }
  }
}
</script>
