<template>
  <div class="invitation-create-page">
    <div class="left-section"></div>
    <div class="right-section">
      <PhoneTemplate>
        <div style="height: 400px; background-color: yellow">1</div>
        <div style="height: 200px; background-color: skyblue">2</div>
        <div style="height: 100px; background-color: pink">3</div>
      </PhoneTemplate>
    </div>
  </div>
</template>
<script>
import PhoneTemplate from "@/components/invitation/PhoneTemplate.vue";
export default {
  name: "InvitationCreate",
  components: {
    PhoneTemplate,
  },
};
</script>
