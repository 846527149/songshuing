<template>
    <div class="banner">
      <img :src="bannerData.src"/>
    </div>
</template>
<style lang="scss" scoped>
.banner {
  img{
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      bannerData: { src: require("../assets/images/banner.jpg") }
    };
  }
};
</script>
