<template>
  <div class="ind_case wp">
    <h2> 案例展示
      <a href="#">查看更多 +</a>
    </h2>
    <ul>
      <li v-for="(item,index) in caseData" :key="index">
        <a :href="item.link">
          <div class="imgbox">
            <img v-lazy="item.src">
            <div class="hover">
              <b></b>
              <div class="txt">
                <h3>{{item.title}}</h3>
                <span>查看详情</span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  data() {
    return {
      caseData: [
        {
          title: "首页",
          src: "./static/images/goods.jpg",
          link: "#"
        },
        {
          title: "首页",
          src: "./static/images/goods.jpg",
          link: "#"
        },
        {
          title: "首页",
          src: "./static/images/goods.jpg",
          link: "#"
        },
        {
          title: "首页",
          src: "./static/images/goods.jpg",
          link: "#"
        }
      ]
    };
  }
};
</script>
