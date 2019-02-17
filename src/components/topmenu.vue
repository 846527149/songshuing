<template>
  <div class="topmenu">
    <div id="hd">
      <div class="logo">
        <a href="#">
          <img :src="logoUrl" alt="选购造型松树,造型盆景，黑松，油松就来景海园林">
        </a>
      </div>
      <ul>
        <li :class="item.class" v-for="(item, index) in menuData" :key="index">
          <router-link :to="item.link">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoUrl: require("../../src/assets/images/logo.png"),
      menuData: [
        { title: "首页", link: "/", class: "menu-item current-menu-item" },
        { title: "公司介绍", link: "about", class: "menu-item" },
        { title: "造型松树", link: "goods_zxs", class: "menu-item" },
        { title: "造型盆景", link: "goods_pj", class: "menu-item" },
        { title: "新闻动态", link: "news", class: "menu-item" },
        { title: "工程案例", link: "goods_zxs", class: "menu-item" },
        { title: "联系我们", link: "contact", class: "menu-item" }
      ]
    };
  }
};
</script>
