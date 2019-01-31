<template>
  <div class="ind_pro">
    <div class="wp">
      <h2>产品展示
        <a href="#">查看更多 +</a>
      </h2>
      <ul>
        <li v-for="(item,index) in goodsData" :key="index">
          <a :href="item.link">
            <div class="imgbox">
              <img v-lazy="item.src">
              <p>{{item.title}}</p>
            </div>
          </a>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  data() {
    return {
      goodsData: [
        { title: "精品景观松", src: require('../assets/images/2019012309.jpg'),link:"#"},
        { title: "精品景观松", src: require('../assets/images/2019012310.jpg'),link:"#"},
        { title: "精品景观松", src: require('../assets/images/2019012311.jpg'),link:"#"},
        { title: "精品景观松", src: require('../assets/images/2019012305.jpg'),link:"#"},
        { title: "精品景观松", src: require('../assets/images/2019012312.jpg'),link:"#"},
        { title: "精品景观松", src: require('../assets/images/2019012306.jpg'),link:"#"},
      ]
    };
  }
};
</script>