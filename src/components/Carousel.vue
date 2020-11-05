<template>
  <div>
    <b-carousel
      id="carousel-fade"
      interval="4000"
      no-hover-pause="false"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
    >
      <b-carousel-slide id="imageca" :img-src="require('../assets/carousel1.jpg')"></b-carousel-slide>
      <b-carousel-slide id="imageca" :img-src="require('../assets/carousel2.jpg')"></b-carousel-slide>
      <b-carousel-slide id="imageca" :img-src="require('../assets/carousel3.jpg')"></b-carousel-slide>
      <b-carousel-slide id="imageca" :img-src="require('../assets/carousel4.jpg')"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style scoped>
#imageca {
  height: 100vh !important;
}
</style>

