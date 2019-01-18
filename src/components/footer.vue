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
          logoImage:"",
          salePhone:"13206349983",
          afterPhone:"13206349983",
          address:"山东省济南市钢城区景海园林基地",
          email:"songshuing@126.com",
          webaddress:"https://www.songshuing.com",
          renum:"鲁备000000001号",
          company:"Copyright 2019 景海园林 All rights reserved"
      }
    };
  }
};
</script>