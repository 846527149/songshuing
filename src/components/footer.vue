<template>
  <footer id="ft">
    <div class="ft">
      <img :src="footerData.logoImage">
      <div class="ftnr">
        <h2>全国销售热线：{{footerData.salePhone}}</h2>
        <h2>售后电话：{{footerData.afterPhone}}</h2>
        <p>地址：{{footerData.address}} 网址：{{footerData.webaddress}}</p>
      </div>
      <p class="bq"></p>
      <p class="bq">备案号：
        <a href="https://www.songshuing.com" target="_blank" rel="nofollow">{{footerData.renum}}</a>
        <br>{{footerData.company}}
        <br>&nbsp;
      </p>
      <p></p>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  data() {
    return {
      footerData: {
          logoImage:require("../../src/assets/images/gzh.jpg"),
          salePhone:"13206349983",
          afterPhone:"13656349982",
          address:"山东省莱芜市钢城区棋山国家森林公园桃峪村",
          email:"songshuing@126.com",
          webaddress:"https://www.songshuing.com",
          renum:"鲁ICP备18055830号-1",
          company:"Copyright 2008-2019 莱芜市景海园林农民专业合作社 "
      }
    };
  }
};
</script>