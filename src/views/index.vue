<template>
  <div>
    <topmenu/>
    <banner/>
    <comgoods/>
    <comabout/>
    <comnews/>
    <comlink/>
    <footerlink/>
  </div>
</template>

<script>
import topmenu from "../components/topmenu";
import banner from "../components/banner";
import comgoods from "../components/com_goods";
import comabout from "../components/com_about";
import comcase from "../components/com_case";
import comnews from "../components/com_news";
import comlink from "../components/com_link";
import footerlink from "../components/footer";
export default {
  name: "index",
  components: {
    topmenu,
    banner,
    comgoods,
    comabout,
    comcase,
    comnews,
    comlink,
    footerlink
  }
};
</script>

