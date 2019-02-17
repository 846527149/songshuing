import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import About from '../views/about.vue'
import Goods_zxs from '../views/goods_zxs.vue'
import Goods_pj from '../views/goods_pj.vue'
import Goods_detail from '../views/goods_detail.vue'
import News from '../views/news.vue'
import Case from '../views/case.vue'
import Contact from '../views/contact.vue'
import News_detail from '../views/news_detail.vue'



// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

export const constantRouterMap = [{
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/goods_zxs",
    component: Goods_zxs
  },
  {
    path: "/goods_pj",
    component: Goods_pj
  },
  {
    path: "/goods_detail",
    component: Goods_detail
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/news_detail",
    component: News_detail
  },
  {
    path: "/case",
    component: Case
  },
  {
    path: "/contact",
    component: Contact
  }
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
