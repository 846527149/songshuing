<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import seoMixin from "./util/seo";
export default {
  name: "App",
  mixins: [seoMixin]
};
</script>
