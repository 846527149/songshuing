<template>
  <div class="banner_ny">
    <img :src="bannerData.src">
  </div>
</template>
<style lang="scss" scoped>
.banner_ny {
    width: 100%;

  img {
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      bannerData: { src: require("../assets/images/ny_banner.jpg") }
    };
  }
};
</script>