<template>
  <div class="container-search-card">
    <div class="container-search">
      <h3>Search Comic</h3>
      <input type="number" placeholder="Enter a number" v-model="number"/>
      <button type="button" @click="searchComic()" :disabled="!validatedNumber">Search</button>
    </div>
    <div class="container-buttons">
      <button class="container-buttons__tooltip" type="button" @click="changeComic(comic.num - 1)">
        <v-icon class="container-buttons__button-icon" name="arrow-left-circle"/>
        <span class="tooltiptext">View previous comic</span>
      </button>
      <button class="container-buttons__tooltip" type="button" @click="randomComic()">
        <v-icon class="container-buttons__button-icon" name="refresh-cw"/>
        <span class="tooltiptext">View a random comic</span>
      </button>
      <button class="container-buttons__tooltip" type="button" @click="changeComic(comic.num + 1)">
        <v-icon class="container-buttons__button-icon" name="arrow-right-circle"/>
        <span class="tooltiptext">View next comic</span>
      </button>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";
import { types } from "@/store/modules/comic/types";

export default {
  name: "SearchCard",
  data() {
    return {
      number: 0,
      validatedNumber: true,
    };
  },
  computed: {
    ...mapState(types.PATH, ['comic']),
  },
  methods: {
    ...mapActions(types.PATH, {
      getComic: types.actions.GET_RANDOM_COMIC,
      getSpecificComic: types.actions.GET_SPECIFIC_COMIC,
    }),
    searchComic() {
      this.getSpecificComic(this.number);
    },
    changeComic(number) {
      this.getSpecificComic(number);
    },
    randomComic() {
      this.getComic();
    },
  },
  mounted() {
    this.number = this.comic.num;
  },
  watch: {
    number() {
      this.validatedNumber = this.number >= 1 && this.number <= 2500;
    }
  }
}
</script>