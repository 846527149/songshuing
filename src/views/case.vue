<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_pro">
        <h2>客户案例</h2>
        <ul>
          <li>
            <a href="#">
              <div class="imgbox">
                <img src="#">
                <p>#</p>
              </div>
            </a>
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
  }
};
</script>

