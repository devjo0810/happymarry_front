<template>
  <div class="phone-template">
    <img :src="phoneImg" class="phone-img" />
    <div class="component-wrap">
      <perfect-scrollbar>
        <slot />
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import phoneImg from "@/assets/images/phone-template.png";

export default {
  name: "PhoneTemplate",
  data: () => ({
    phoneImg,
  }),
};
</script>
