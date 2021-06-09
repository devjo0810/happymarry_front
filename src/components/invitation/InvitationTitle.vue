<template>
  <div class="invitation-title-compo" :class="type" @click="onSetting">
    <div class="title" v-if="type === 'template'">청첩장 제목</div>
    <div class="title" v-if="type === 'setting'">
      {{ title || "제목을 입력해주세요" }}
    </div>
  </div>
</template>
<script>
export default {
  name: "InvitationTitle",
  props: ["type"],
  data: () => ({
    title: null,
  }),
  methods: {
    onSetting() {
      if (this.type !== "setting") return;
      this.title = "청접장 제목";
    },
  },
};
</script>
