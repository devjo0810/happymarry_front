<template>
  <div class="invitation-gallery-compo" :class="type" @click="onSetting">
    <font-awesome-icon icon="image" v-if="!imgSrc" />
    <img v-if="imgSrc" :src="imgSrc" />
    <input
      class="hide"
      ref="inputImg"
      type="file"
      accept="image/jpeg, image/png"
      @change="onChangeImg"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import * as logger from "@/utils/logger";

export default {
  name: "InvitationGallery",
  props: ["type"],
  data: () => ({
    imgSrc: null,
  }),
  methods: {
    ...mapActions(["selectOneImg"]),
    onSetting() {
      if (this.type !== "setting") return;
      this.$refs.inputImg.click();
    },
    onChangeImg(e) {
      const vm = this;
      logger.log("[Gallery onChangeImg]");
      const files = e.target.files;
      if (files.length) {
        let reader = new FileReader();
        reader.onload = function (event) {
          vm.imgSrc = event.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    },
  },
};
</script>
