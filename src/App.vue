<template>
  <div id="app">
    <home-comic v-if="!loading"/>
    <div class="loader" v-else>
      <pulse-loader color="white" size="30px"/>
    </div>
  </div>
</template>

<script>
import { types } from "@/store/modules/comic/types";
import { mapActions, mapState } from "vuex";
import HomeComic from "@/views/homeComic.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "App",
  components: {
    HomeComic,
    PulseLoader
  },
  computed: {
    ...mapState(types.PATH, ['loading'])
  },
  methods: {
    ...mapActions(types.PATH, {
      getComic: types.actions.GET_RANDOM_COMIC,
      getRatedComics: types.actions.GET_RATED_COMICS,
    }),
  },
  mounted() {
    this.getComic();
    this.getRatedComics();
  }
};
</script>