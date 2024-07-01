<template>
  <div class="container-image-card">
    <div class="container-title">
      <div class="container-title__info-type">COMIC</div>
      <div class="container-title__title">{{ comic.title }}</div>
    </div>
    <div class="container-image">
      <img :src="comic.img"  alt=""/>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { types } from "@/store/modules/comic/types";

export default {
  name: "ImageCard",
  computed: {
    ...mapState(types.PATH, ['comic']),
  },
}

</script>