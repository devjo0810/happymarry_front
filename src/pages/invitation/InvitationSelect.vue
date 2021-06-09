<template>
  <div class="invitation-select-page">
    <div class="left-section">
      <div class="phone-wrap">
        <swiper ref="phoneSwiper" :options="swiperOption">
          <swiper-slide data-index="1">
            <PhoneTemplate>
              <div style="height: 400px; background-color: yellow">1</div>
              <div style="height: 200px; background-color: skyblue">2</div>
              <div style="height: 100px; background-color: pink">3</div>
            </PhoneTemplate>
          </swiper-slide>
          <swiper-slide data-index="2">
            <PhoneTemplate>
              <div style="height: 400px; background-color: yellow">1</div>
              <div style="height: 200px; background-color: skyblue">2</div>
              <div style="height: 100px; background-color: pink">3</div>
            </PhoneTemplate>
          </swiper-slide>
          <swiper-slide data-index="3">
            <PhoneTemplate>
              <div style="height: 400px; background-color: yellow">1</div>
              <div style="height: 200px; background-color: skyblue">2</div>
              <div style="height: 100px; background-color: pink">3</div>
            </PhoneTemplate>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="right-section">
      <router-link to="/">
        <img :src="logoImg" alt="logo" class="logo" />
      </router-link>
      <h3>Select Your Theme</h3>
      <b-button @click="createInvitation" variant="primary" class="btn"
        >Create Invitation</b-button
      >
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import PhoneTemplate from "@/components/invitation/PhoneTemplate.vue";
import logoImg from "@/assets/images/only_logo.png";

export default {
  name: "InvitationSelect",
  components: {
    PhoneTemplate,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      logoImg,
    };
  },
  methods: {
    createInvitation() {
      const slide = document.getElementsByClassName("swiper-slide-active")[0];
      const index = slide.dataset.index;
      console.log("[debug] slide index :", index);
      this.$router.push("/invitation/create");
    },
  },
};
</script>
