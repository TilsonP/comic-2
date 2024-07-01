<template>
  <div class="container-info-card">
    <div class="container-info-card__header">
      <div class="container-info-card__icon">i</div>
      <div>Info Card</div>
    </div>
    <div class="container-info-card__info">
      <table>
        <tbody>
        <tr>
          <th>#:</th>
          <td>{{ comic.num }}</td>
        </tr>
        <tr>
          <th>Title:</th>
          <td>{{ comic.title }}</td>
        </tr>
        <tr>
          <th>Create date:</th>
          <td>{{ `${comic.day}/${comic.month}/${comic.year}` }}</td>
        </tr>
        <tr>
          <th colspan="2">Transcription:</th>
        </tr>
        <tr>
          <td colspan="2"><div class="container-info-card__transcript-content" v-html="formattedTranscript(comic.transcript)"></div></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { types } from "@/store/modules/comic/types";

export default {
  name: "InfoCard",
  computed: {
    ...mapState(types.PATH, ['comic']),
  },
  methods: {
    formattedTranscript(transcript) {
      if (transcript) {
        return transcript.replace(/\n/g, "<br>");
      } else {
        return "No transcript available";
      }
    }
  }
}
</script>
