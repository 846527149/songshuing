<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_case">
        <h2>造型盆景</h2>
        <ul>
          <li v-for="(item,index) in goodsData" :key="index">
            <a :href="item.href">
              <div class="imgbox">
                <img v-lazy="item.src">
                <p>{{item.title}}</p>
              </div>
            </a>
          </li>
        </ul>
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
  name: "goods_pj",
  components: {
    topmenu,
    combanner,
    footerlink
  },
  data() {
    return {
      goodsData: [
        {
          href: "",
          src: require("../../src/assets/images/2019012301.jpg"),
          title: "造型松树"
        },
        {
          href: "",
          src: require("../../src/assets/images/2019012302.jpg"),
          title: "景观松"
        },
        {
          href: "",
          src: require("../../src/assets/images/2019012303.jpg"),
          title: "黑松"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        },
         {
          href: "",
          src: require("../../src/assets/images/goods.jpg"),
          title: "造型松树"
        }
      ]
    };
  }
};
</script>

