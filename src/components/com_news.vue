<template>
  <div class="ind_news wp">
    <h2>
      新闻中心
      <a href="#">查看更多 +</a>
    </h2>
    <div class="ind_news_l">
      <div class="imgwk">
        <a :href="newsMain.Link">
          <img v-lazy="newsMain.src">
        </a>
      </div>
      <div class="xwjj">
        <a href="#">
          <h3>景海园林预祝新老客户新年快乐</h3>
        </a>
        <a href="#">
          <p>金猪年即将到来，景海园林全体员工祝广大新老客户新年快乐，公司春节期间正常营业，求购电话：13203649983</p>
        </a>
      </div>
    </div>
    <div class="ind_news_r">
      <ul>
        <li
          v-for="(item,index) in newsData"
          :key="index"
        >
          <a :href="item.link">
            <h3>{{item.title}}</h3>
            <h4>{{item.createdate}}</h4>
            <h5>{{item.des}}</h5>
          </a>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  data() {
    return {
      newsMain: {
        src: "./static/images/2019012301.jpg",
        link: "#"
      },
      newsData: [
        {
          des:
            "首先要具备的条件，就是造型松树生长健康，有活力，经得起制作而制作后又迅速得到恢复。得到一个好桩坯不容易，要想将它作为优良的盆景，更不容易。园子里每一棵下山桩，都应有一个生长制作周期表，一步一步 来完成，才能获得成功。",
          title: "造型松树整形后需要注意事项",
          createdate: "2015-10-21",
          link: "news_detail?code=0001"
        },
        {
          des:
            "育苗地应选择土壤疏松、土层深厚的沙壤土，地势平坦、排水良好、有灌溉条件的地块为好。景观松根系具有菌根菌共生，菌根菌对促进苗木生长具有良好作用，即可以促进苗木根系吸收土壤中的水分和养分，提高苗木的抗旱、抗病能力。",
          title: "怎样才能让景观松更具有生命力",
          createdate: "2016-06-01",
          link: "news_detail?code=0002"
        },
        {
          des:
            " 在日本，松树既是长寿的象征，也是新春和吉祥的象征，广受日本人的喜爱，是日本的代表性树种之一，在日本的寺庙、神社、园林等地广泛种植。在东京，日本天皇的皇宫外苑（俗称皇居前广场）就种植有大量的松树。这批松树 苍翠欲滴，造型各异。虽不高大挺拔，却也遒劲有力，成为东京一道靓丽的风景线。",
          title: "造型景观松将在2019年迎来新商机",
          createdate: "2019-01-08",
          link: "news_detail?code=0003"
        },
        {
          des:
            "黑松树和油松树形态在成年后，略有分别，黑松因为生长的速度要比油松快，所以黑松每层枝之间的间距要比油松大，一般一样高度的黑松和油松，油松要比黑松的松枝层数要多。黑松树干成年后往往曲折，带有弯曲，而油松相对比较挺拔。",
          title: "造型景观松将在2019年迎来新商机",
          createdate: "2019-02-23",
          link: "news_detail?code=0004"
        }
      ]
    };
  }
};
</script>
