<template>
  <div class="fot_link">
    <div class="index-link">
      <p>友情链接：</p>
      <ul>
        <li v-for="(item,index) in linkData" :key="index">
          <a :href="item.link" :target="item.target">{{item.title}}</a>
        </li>
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
      linkData: [
        {
          title: "阳光造型松树基地",
          target: "_blank",
          link: "http://www.songshu123.com"
        }
      ]
    };
  }
};
</script>