<template>
  <div>
    <topmenu />
    <combanner />
    <div class="ny_bj">
      <div class="ny_com ">
        <div class="ny_goods_left">
          <div class="ny_menu_pane">
            <div class="ny_menu_pane_title">
              产品分类
            </div>
            <div class="ny_menu_pane_item">
              <ul>
                <li><a href="goods_zxs">景观松树</a></li>
                <li><a href="goods_pj">造型盆景</a></li>
              </ul>
            </div>
          </div>
          <div class="ny_menu_pane">
            <div class="ny_menu_pane_title">
              新闻动态
            </div>
            <div class="ny_menu_pane_item">
              <ul>
                <li><a href="news_detail?code=0001">造型松树整形后需要注意事项</a></li>
                <li><a href="news_detail?code=0002">怎样才能让景观松更具有生命力</a></li>
                <li><a href="news_detail?code=0003">造型景观松将在2019年迎来新商机</a></li>
                <li><a href="news_detail?code=0004">造型松跟泰山石的绝妙搭配</a></li>
                <li><a href="news_detail?code=0005">油松，黑松怎么区分？</a></li>
              </ul>
            </div>
          </div>
          <div class="ny_menu_pane">
            <div class="ny_menu_pane_title">
              联系我们
            </div>
            <div class="ny_menu_pane_item">
              <ul>
                <li><a href="#">联系电话：13206349983</a></li>
                <li><a href="#">联系电话：13656349982</a></li>
                <li><a href="#">联系人：侯经理</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ny_goods_right">
          <p>{{newsContent}}</p>
          <img :src="newsImage">
        </div>
      </div>
    </div>
    <footerlink />
  </div>
</template>

<script>
import topmenu from "../components/topmenu";
import combanner from "../components/com_banner";
import footerlink from "../components/footer";

export default {
  name: "goods_zxs",
  components: {
    topmenu,
    combanner,
    footerlink
  },

  methods: {
    getNewsContent() {
      let code = this.$route.query.code;
      let newsList = require("../data/news.json");
      let index = 0;
      newsList.newsitem.forEach(function(element, i) {
        if (element.code == code) {
          index = i;
        }
      });
      this.newsContent = newsList.newsitem[index].content;
      this.newsImage = newsList.newsitem[index].src;
    }
  },
  mounted() {
    this.getNewsContent();
  },
  data() {
    return {
      newsContent: null,
      newsImage: null
    };
  }
};
</script>
<style lang="scss" scoped>
@import url("../assets/sass/menu_left.scss");
.ny_com {
  padding-left: 20px;
}
p {
  text-indent: 24px;
}
</style>


