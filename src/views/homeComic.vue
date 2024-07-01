<template>
  <div class="container-home">
    <div>
      <info-card/>
      <qualify-card/>
      <search-card/>
    </div>
    <div class="container-home__image">
      <image-card/>
    </div>
  </div>
</template>

<script>

import ImageCard from "@/components/imageCard.vue";
import InfoCard from "@/components/infoCard.vue";
import QualifyCard from "@/components/qualifyCard.vue";
import SearchCard from "@/components/searchCard.vue";

export default {
  name: "HomeComic",
  components: { SearchCard, QualifyCard, InfoCard, ImageCard }
}

</script>