<template>
  <div style="width: 100%; height: 100%">
    <PhoneTemplate>
      <div style="height: 100px; background-color: yellow">a</div>
      <div style="height: 500px">b</div>
      <div>c</div>
    </PhoneTemplate>
  </div>
</template>
<script>
import PhoneTemplate from "@/components/invitation/PhoneTemplate.vue";
export default {
  components: {
    PhoneTemplate,
  },
};
</script>
