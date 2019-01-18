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
              <img :src="item.src">
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
        { title: "首页", src: require('../assets/images/goods.jpg'),link:"#"},
        { title: "首页", src: require('../assets/images/goods.jpg'),link:"#"},
        { title: "首页", src: require('../assets/images/goods.jpg'),link:"#"},
        { title: "首页", src: require('../assets/images/goods.jpg'),link:"#"},
        { title: "首页", src: require('../assets/images/goods.jpg'),link:"#"},
        { title: "首页", src: require('../assets/images/goods.jpg'),link:"#"},
      ]
    };
  }
};
</script>