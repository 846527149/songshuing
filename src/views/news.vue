<template>
  <div>
    <topmenu />
    <combanner />
    <div class="nytop">
      <div>
        <li>
          <router-link to="news">
          新闻中心</router-link>
        </li>
        <li class="cat-item cat-item-3">
          <router-link to="news">公司动态</router-link>
        </li>
        <li class="cat-item cat-item-4">
          <router-link to="news">行业新闻</router-link>
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
            <router-link :to="item.href">
              <div class="ny_news_l">
                <img :src="item.src">
                <p>{{item.createdate}}</p>
              </div>
            </router-link>
            <div class="ny_news_r">
              <router-link :to="item.href">
                <h3>{{item.title}}</h3>
              </router-link >
              <h5>{{item.des}}</h5>
              <hr>
              <h5>
               <router-link :to="item.href">查看详情</router-link >
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

