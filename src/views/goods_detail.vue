<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_case">
            <img :src="imageUrl"/>
      </div>
    </div>
    <footerlink/>
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
  data() {
     let code=this.$route.query.code;
    return {
        imageUrl:require("../../src/assets/images/"+code+".jpg"),
    };
  }
};
</script>

