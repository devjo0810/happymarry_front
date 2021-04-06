<template>
  <div class="home-page">
    <b-carousel
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="560px"
      class="home-carousel"
    >
      <b-carousel-slide
        v-for="(c, idx) in CAROUSEL_LIST"
        :key="idx"
        :caption="c.caption"
        :text="c.text"
        :img-src="c.src"
      />
    </b-carousel>
    <b-container>
      <img alt="Vue logo" src="@/assets/images/logo.png" />
    </b-container>
  </div>
</template>

<script>
const CAROUSEL_LIST = [
  {
    caption: 'First Slide',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    src: require('@/assets/images/carousel1.jpg')
  },
  {
    caption: 'Second slide',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    src: require('@/assets/images/carousel2.jpg')
  },
  {
    caption: 'Third Slide',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    src: require('@/assets/images/carousel3.jpg')
  },
];

export default {
  name: "Home",
  components: {
  },
  data: () => ({
    CAROUSEL_LIST
  })
};
</script>
