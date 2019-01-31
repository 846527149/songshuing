<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="nytop">
      <div>
        <li>
          <a href="#" title=" 新闻中心">新闻中心</a>
        </li>
        <li class="cat-item cat-item-3">
          <a href="#">公司动态</a>
        </li>
        <li class="cat-item cat-item-4">
          <a href="#">行业新闻</a>
        </li>
      </div>
    </div>
    <!-- Latest Products begin -->
    <div class="ny_bj">
      <div class="ny_com ny_news">
        <h2>行业新闻</h2>
        <ul>
          <li v-for="(item,index) in newsData" :key="index">
            <a :href="item.href">
              <div class="ny_news_l">
                <img :src="item.src">
                <p>{{item.createdate}}</p>
              </div>
            </a>
            <div class="ny_news_r">
              <a :href="item.href">
                <h3>{{item.title}}</h3>
              </a>
              <h5>{{item.des}}</h5>
              <hr>
              <h5>
                <a :href="item.href">查看详情</a>
              </h5>
            </div>
            <div class="clear"></div>
          </li>
        </ul>
        <p class="pag"></p>
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
  name: "about",
  components: {
    topmenu,
    combanner,
    footerlink
  },
  data() {
    return {
      newsData: [
        {
          href: "#",
          createdate:"2019-02-23",
          src: require("../../src/assets/images/2019012301.jpg"),
          title: "造型景观松将在2019年迎来新商机",
          des:"   在日本，松树既是长寿的象征，也是新春和吉祥的象征，广受日本人的喜爱，是日本的代表性树种之一，在日本的寺庙、神社、园林等地广泛种植。在东京，日本天皇的皇宫外苑（俗称皇居前广场）就种植有大量的松树。"
        },
        {
          href: "#",
          createdate:"2019-02-01",
          src: require("../../src/assets/images/2019012302.jpg"),
          title: "造型松树整形后需要注意事项",
          des:"  首先要具备的条件，就是造型松树生长健康，有活力，经得起制作而制作后又迅速得到恢复。得到一个好桩坯不容易，要想将它作为优良的盆景，更不容易。园子里每一棵下山桩，都应有一个生长制作周期表，一步一步 来完成，才能获得成功。"
        },
         {
          href: "#",
          createdate:"2018-10-09",
          src: require("../../src/assets/images/2019012303.jpg"),
          title: "怎样才能让景观松更具有生命力",
          des:"育苗地应选择土壤疏松、土层深厚的沙壤土，地势平坦、排水良好、有灌溉条件的地块为好。景观松根系具有菌根菌共生，菌根菌对促进苗木生长具有良好作用，即可以促进苗木根系吸收土壤中的水分和养分，提高苗木的抗旱、抗病能力。"
        },
         {
          href: "#",
          createdate:"2017-06-21",
          src: require("../../src/assets/images/2019012304.jpg"),
          title: "油松，黑松怎么区分？",
          des:"黑松树和油松树形态在成年后，略有分别，黑松因为生长的速度要比油松快，所以黑松每层枝之间的间距要比油松大，一般一样高度的黑松和油松，油松要比黑松的松枝层数要多。黑松树干成年后往往曲折，带有弯曲，而油松相对比较挺拔。"
        },
         {
          href: "#",
          createdate:"2016-10-01",
          src: require("../../src/assets/images/2019012305.jpg"),
          title: "造型松跟泰山石的绝妙搭配",
          des:"在日本，松树既是长寿的象征，也是新春和吉祥的象征，广受日本人的喜爱，是日本的代表性树种之一，在日本的寺庙、神社、园林等地广泛种植。在东京，日本天皇的皇宫外苑（俗称皇居前广场）就种植有大量的松树。"
        },
      ]
    };
  }
};
</script>

