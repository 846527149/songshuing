<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_pro">
        <h2>联系我们</h2>
        <p>联系电话：13206349983</p>
        <p>联系地址：山东省济南市钢城区</p>
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
  }
};
</script>

