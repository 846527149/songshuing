<template>
  <div>
    <topmenu/>
    <combanner/>
    <div class="ny_bj">
      <div class="ny_com ny_about">
        <h2>关于我们</h2>
        <p>这是示范页面。页面和博客文章不同，它的位置是固定的，通常会在站点导航栏显示。很多用户都创建一个“关于”页面，向访客介绍自己。例如：</p>
        <blockquote>
          <p>欢迎！我白天是个邮递员，晚上就是个有抱负的演员。这是我的博客。我住在天朝的帝都，有条叫做Jack的狗。</p>
        </blockquote>
        <p>……或这个：</p>
        <blockquote>
          <p>XYZ Doohickey公司成立于1971年，自从建立以来，我们一直向社会贡献着优秀doohickies。我们的公司总部位于天朝魔都，有着超过两千名员工，对魔都政府税收有着巨大贡献。</p>
        </blockquote>
        <p>而您，作为一个WordPress用户，我们建议您访问
          <a href="#">控制板</a>，删除本页面，然后添加您自己的页面。祝您使用愉快！
        </p>
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

