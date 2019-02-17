<template>
  <div class="ind_pro">
    <div class="wp">
      <h2>产品展示
        <a href="#">查看更多 +</a>
      </h2>
      <ul>
        <li v-for="(item,index) in goodsData" :key="index">
          <router-link :to="item.link">
            <div class="imgbox">
              <img v-lazy="item.src">
              <p>{{item.title}}</p>
            </div>
          </router-link>
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
        { title: "精品景观松", src: "./static/images/2019012309.jpg",link:"goods_detail?code=2019012309"},
        { title: "精品景观松", src: "./static/images/2019012310.jpg",link:"goods_detail?code=2019012310"},
        { title: "精品景观松", src: "./static/images/2019012311.jpg",link:"goods_detail?code=2019012311"},
        { title: "精品景观松", src: "./static/images/2019012305.jpg",link:"goods_detail?code=2019012305"},
        { title: "精品景观松", src: "./static/images/2019012312.jpg",link:"goods_detail?code=2019012312"},
        { title: "精品景观松", src: "./static/images/2019012306.jpg",link:"goods_detail?code=2019012306"},
      ]
    };
  }
};
</script>
