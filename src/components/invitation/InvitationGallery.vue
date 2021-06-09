<template>
  <div class="invitation-gallery-compo" :class="type" @click="onSetting">
    <font-awesome-icon icon="image" v-if="!img" />
    <img v-if="img" src="" alt="" />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "InvitationGallery",
  props: ["type"],
  data: () => ({
    img: null,
  }),
  methods: {
    ...mapActions(["setOneImg"]),
    onSetting() {
      this.setOneImg();
    },
  },
};
</script>
