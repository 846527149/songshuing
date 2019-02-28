<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_case">
        <h2>造型松树</h2>
        <ul>
          <li v-for="(item,index) in goodsData" :key="index">
            <router-link :to="item.href">
              <div class="imgbox">
                <img v-lazy="item.src">
                <p>{{item.title}}</p>
              </div>
            </router-link>
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
  name: "goods_zxs",
  components: {
    topmenu,
    combanner,
    footerlink
  },
  data() {
    return {
      goodsData: [
          {
          href: "goods_detail?code=goods",
          src: "http://media.songshuing.com/goods.jpg",
          title: "造型松树"
        },
         {
         href: "goods_detail?code=2019012309",
          src: "http://media.songshuing.com/2019012309.jpg",
          title: "造型松树"
        },
        {
          href: "goods_detail?code=2019012302",
          src: "http://media.songshuing.com/2019012302.jpg",
          title: "景观松"
        },
        {
         href: "goods_detail?code=2019012303",
          src: "http://media.songshuing.com/2019012303.jpg",
          title: "黑松"
        },
        {
         href: "goods_detail?code=2019012304",
          src: "http://media.songshuing.com/2019012304.jpg",
          title: "造型松树"
        },
        {
          href: "goods_detail?code=2019012305",
          src: "http://media.songshuing.com/2019012305.jpg",
          title: "造型松树"
        },
        {
         href: "goods_detail?code=2019012306",
          src: "http://media.songshuing.com/2019012306.jpg",
          title: "造型松树"
        },
        {
         href: "goods_detail?code=2019012307",
          src: "http://media.songshuing.com/2019012307.jpg",
          title: "造型松树"
        },
        {
          href: "goods_detail?code=2019012308",
          src: "http://media.songshuing.com/2019012308.jpg",
          title: "造型松树"
        },
        {
          href: "goods_detail?code=2019012310",
          src: "http://media.songshuing.com/2019012310.jpg",
          title: "造型松树"
        },
        {
          href: "goods_detail?code=2019012311",
          src: "http://media.songshuing.com/2019012311.jpg",
          title: "造型松树"
        },
        {
          href: "goods_detail?code=goods",
          src: ".http://media.songshuing.com/goods.jpg",
          title: "造型松树"
        }
      ]
    };
  }
};
</script>

