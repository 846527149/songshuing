<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_case">
        <h2>造型盆景</h2>
        <ul>
          <li v-for="(item,index) in goodsData" :key="index">
             <router-link :to="item.href">
              <div class="imgbox">
                <img v-lazy="item.src">
                <p>{{item.title}}</p>
              </div>
            </router-link >
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
          href: "goods_detail?code=2019012312",
          src: "http://media.songshuing.com/2019012312.jpg",
          title: "造型盆景"
        },
        {
          href: "goods_detail?code=2019012302",
          src: "http://media.songshuing.com/2019012302.jpg",
          title: "造型盆景"
        },
        {
          href: "goods_detail?code=2019021701",
          src: "http://media.songshuing.com/2019021701.jpg",
          title: "造型盆景"
        },
        {
          href: "goods_detail?code=2019021702",
          src: "http://media.songshuing.com/2019021702.jpg",
          title: "造型盆景"
        },
        {
          href: "goods_detail?code=goods",
          src: "http://media.songshuing.com/goods.jpg",
          title: "造型盆景"
        },
        {
          href: "goods_detail?code=2019012307",
          src: "http://media.songshuing.com/2019012307.jpg",
          title: "造型盆景"
        },
      ]
    };
  }
};
</script>

