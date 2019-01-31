<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_about">
        <h2>关于我们</h2>
        <p>
          莱芜市景海园林农民专业合作社社成立于2008年，位于全国最大景观松基地，自公司成立以来一直为广大客户提供优质的造型松树，盆景，黑松，油松，行道松。公司销售景观松造型优美、规格齐全、
          价格实惠。已经为山东、北京、江苏、河南、浙江等上千家客户提供松树资源，并深受客户喜欢。
        </p>
        <p>
          不管是需求量大的工程用松树，还是私家别墅的精美景观松，总能在我们这里找到合适的。我们一直以客户至上，
          只要您一个电话，剩下的交给我们来给您操办。 热忱欢迎社会各界朋友前来观光、洽谈。选购优质造型油松 ，泰山景松 ，造型黑松，大型景观树，黑松行道树，黑松，
          油松，就到景海园林！
        </p>
      </div>
    </div>
    <footerlink/>
  </div>
</template>
<style lang="scss" scoped>
p {
  text-indent: 20px;
}
</style>

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

