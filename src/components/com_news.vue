<template>
  <div class="ind_news wp">
    <h2>
      新闻中心
      <a href="#">查看更多 +</a>
    </h2>
    <div class="ind_news_l">
      <div class="imgwk">
        <a :href="newsMain.Link">
          <img :src="newsMain.src">
        </a>
      </div>
      <div class="xwjj">
        <a href="#">
          <h3>INSURANCE向Mata Capital提供收购融资建议</h3>
        </a>
        <a href="#">
          <p>韦干江，广西南宁人，5年压路机驾驶经验，驾驶过的压路机超过十款，基本都是20吨以上，市面上绝大部分机械式设备都了如指掌。近日，梧柳高速D标段举办了液压式压路机与机械式压路机比武，作为压路机行业的老司机他……</p>
        </a>
      </div>
    </div>
    <div class="ind_news_r">
      <ul>
        <li v-for="(item,index) in newsData" :key="index">
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
        src: require("../assets/images/goods.jpg"),
        link: "#"
      },
      newsData: [
        {
          des:
            "韦干江，广西南宁人，5年压路机驾驶经验，驾驶过的压路机超过十款，基本都是20吨以上，市面上绝大部分机械式设备都了如指掌。近日，梧柳高速D标段举办了液压式压路机与机械式压路机比武，作为压路机行业的老司机他……",
          title: "重工、树根互联与华为企业云战略合作，共同打造工业物联网云",
          createdate: "2018-10-01",
          link: "#"
        },
         {
          des:
            "韦干江，广西南宁人，5年压路机驾驶经验，驾驶过的压路机超过十款，基本都是20吨以上，市面上绝大部分机械式设备都了如指掌。近日，梧柳高速D标段举办了液压式压路机与机械式压路机比武，作为压路机行业的老司机他……",
          title: "重工、树根互联与华为企业云战略合作，共同打造工业物联网云",
          createdate: "2018-10-01",
          link: "#"
        },
         {
          des:
            "韦干江，广西南宁人，5年压路机驾驶经验，驾驶过的压路机超过十款，基本都是20吨以上，市面上绝大部分机械式设备都了如指掌。近日，梧柳高速D标段举办了液压式压路机与机械式压路机比武，作为压路机行业的老司机他……",
          title: "重工、树根互联与华为企业云战略合作，共同打造工业物联网云",
          createdate: "2018-10-01",
          link: "#"
        },
         {
          des:
            "韦干江，广西南宁人，5年压路机驾驶经验，驾驶过的压路机超过十款，基本都是20吨以上，市面上绝大部分机械式设备都了如指掌。近日，梧柳高速D标段举办了液压式压路机与机械式压路机比武，作为压路机行业的老司机他……",
          title: "重工、树根互联与华为企业云战略合作，共同打造工业物联网云",
          createdate: "2018-10-01",
          link: "#"
        }
      ]
    };
  }
};
</script>