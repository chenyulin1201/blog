<template>
  <div class="header_wrap">
    <div class="left">
      <div class="left_image">
        <img src="../../assets/image/batman.png" alt="">
      </div>
      <div class="left_name">Rickey</div>
    </div>

    <div class="mobile_left" @click="tapGengduo">
      <i :class="[isMobileNav ? 'mobile_left-active' : '', 'iconfont icon-gengduo mobile_left_gengduo']"></i>
    </div>

    
    <div class="middle">
      <div class="middle_topicSwitch">
      </div>
      <div class="middle_searchBox">
        <i class="iconfont icon-sousuo2 middle_searchBox_searchIcon"></i>
        <input type="text">
      </div>
    </div>

    <div class="right">
      <block v-for="(item, index) in navLinks" :key="index">
        <div @click="tapNav({item, index})" :class="nav_itemActive === index ? 'nav_item nav_item-active':'nav_item'" >{{item.name}}</div>
      </block>
    </div>

    <div :class="isMobileNav? 'mobile_nav mobile_nav-show' : 'mobile_nav mobile_nav-hidden'">
      <block v-for="(item, index) in navLinks" :key="index">
        <div @click="tapNav({item, index})" :class="nav_itemActive === index ? 'nav_item nav_item-active':'nav_item'" >{{item.name}}</div>
      </block>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobileNav: false,
      nav_itemActive: 0,
      navLinks: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '归档',
          path: '',
        },
        {
          name: '标签',
          path: '',
        },
        {
          name: '笔记',
          path: '',
        },
        {
          name: '生活',
          path: '/life',
        },
        {
          name: '旅程',
          path: '',
        },
        {
          name: '友链',
          path: '',
        }
      ]
    }
  },
  
  methods: {
    tapNav(params) {
      this.nav_itemActive = params.index;
      this.$router.push({ path: params.item.path})
    },

    tapGengduo() {
      this.isMobileNav = !this.isMobileNav;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/components/common/header.scss';
</style>