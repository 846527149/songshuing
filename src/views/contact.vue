<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_pro">
        <h2>联系我们</h2>
        <p>联系人：侯经理</p>
        <p>联系电话：13206349983</p>
        <p>联系电话：13656349982</p>
        <p>联系地址：山东省莱芜市钢城区棋山国家森林公园桃峪村</p>
        <p>主营：黑松，油松，景观松，行道松，盆景</p>
      <div id="allmap" class="map" ></div>
      </div>
    </div>

    <footerlink/>
  </div>
</template>
<style lang="scss" scoped>
.ny_pro {
  p {
    line-height: 2;
  }
}
.map {
  height: 500px;
  width: 100%;
  display: block;
  margin-top: 20px;
}
</style>

<script>
import topmenu from "../components/topmenu";
import combanner from "../components/com_banner";
import footerlink from "../components/footer";
import BMap from "BMap";
export default {
  name: "about",
  components: {
    topmenu,
    combanner,
    footerlink,
    BMap
  },
  data() {
    return {
      map: ""
    };
  },
  mounted() {
    //创建实例
    var map = new BMap.Map("allmap");
    //创建坐标点
    var point = new BMap.Point(117.906882,36.221992);
    var marker = new BMap.Marker(point);
	  map.addOverlay(marker);
    //初始化实例，传入坐标点并设置地图级别
    map.centerAndZoom(point, 12);
    map.enableScrollWheelZoom(true);
  }
};
</script>



