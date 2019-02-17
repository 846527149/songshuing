<template>
  <div>
    <topmenu />
    <combanner />
    <div class="nytop">
      <div>
        <li>
          <a
            href="#"
            title=" 新闻中心"
          >新闻中心</a>
        </li>
        <li class="cat-item cat-item-3">
          <a href="#">公司动态</a>
        </li>
        <li class="cat-item cat-item-4">
          <a href="#">行业新闻</a>
        </li>
      </div>
    </div>
    <!-- Latest Products begin -->
    <div class="ny_bj">
      <div class="ny_com ny_news">
        <h2>行业新闻</h2>
        <ul>
          <li
            v-for="(item,index) in newsItem"
            :key="index"
          >
            <a :href="item.href">
              <div class="ny_news_l">
                <img :src="item.src">
                <p>{{item.createdate}}</p>
              </div>
            </a>
            <div class="ny_news_r">
              <a :href="item.href">
                <h3>{{item.title}}</h3>
              </a>
              <h5>{{item.des}}</h5>
              <hr>
              <h5>
                <a :href="item.href">查看详情</a>
              </h5>
            </div>
            <div class="clear"></div>
          </li>
        </ul>
        <p class="pag"></p>
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
  name: "about",
  components: {
    topmenu,
    combanner,
    footerlink
  },

  methods: {
    getNewsList() {
      let newsList = require("../data/news.json");
      this.newsItem = newsList.newsitem;
    }
  },
  mounted() {
    this.getNewsList();
  },
  data() {
    return {
      newsItem: null,
    };
  }
};
</script>

