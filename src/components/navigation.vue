<template>
  <div class="navigation">
    <div class="top-bar"></div>
    <div class="nav-item" v-show="showNavigation">
      <div class="navigation-left" @click="showNav">
        <a href="../homepage/homepage">XueCong's blog</a>
      </div>
      <div class="navigation-right">
        <div @click="showNav">
          <a class="nav-list" href="../blog/blog" :class="{ 'router-link-active' : blog }">博文</a>
        </div>
        <div @click="showNav">
          <a class="nav-list" href="https://weibo.com/3090183841/profile?topnav=1&wvr=6&is_all=1">微博</a>
        </div>
        <div @click="showNav">
          <a class="nav-list" href="https://github.com/overxue">GitHub</a>
        </div>
        <div @click="showNav">
          <a class="nav-list" href="../me/me" :class="{ 'router-link-active' : me }">关于我</a>
        </div>
      </div>
    </div>
    <div class="nav-more-btn" @click="showNav">
      <i :class="{'first':first}"></i>
      <i :class="{'second':first}"></i>
      <i :class="{'three':first}"></i>
    </div>
    <transition name="fade">
      <!-- 遮罩层 -->
      <div class="hide" v-show="showNavigation" @click="showNav"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [
      'blog',
      'me'
    ],
    data () {
      return {
        first: false,
        showNavigation: false
      }
    }
    methods: {
      showNav () {
        this.first = !this.first
        this.showNavigation = !this.showNavigation
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navigation
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 1
    .nav-item
      position: relative
      width: 100%
      height: 100%
      margin: 0 auto
      box-shadow: 0px 1px 11px 2px rgba(42, 42, 42, 0.1)
      transition: all 0.3s ease-out
      background: #fff
      animation: bounceInDown 1.2s
      @keyframes bounceInDown
        from, 60%, 75%, 90%, to {
          animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000)
        }

        0% {
          opacity: 0
          transform: translate3d(0, -3000px, 0)
        }

        60% {
          opacity: 1
          transform: translate3d(0, 25px, 0)
        }

        75% {
          transform: translate3d(0, -10px, 0)
        }

        90% {
          transform: translate3d(0, 5px, 0)
        }

        to {
          transform: none
        }
      .navigation-left
        height: 55px
        text-align: center
        line-height: 55px
        a
          display: inline-block
          font-size: 18px
          font-weight: 700
      .navigation-right
        margin: 10px 80px 20px
        text-align: center
        .nav-list
          display: block
          height: 40px
          line-height: 40px
          padding: 0 20px
          text-align: center
          font-size: 14px
          color: #333
          &:hover
            color: #ff9800
          &.router-link-active
            border-bottom: 2px solid #ff9800
            color: #ff9800
    .nav-more-btn
      position: absolute
      top: 10px
      left: 10px
      width: 42px
      height: 42px
      border-radius: 4px
      box-shadow: 1px 1px 4px rgba(0,0,0,0.2)
      z-index: 1
      background: #fff
      &>i
        position: absolute
        left: 8px
        display: block
        width: 26px
        height: 4px
        transition: all 0.2s linear
        border-radius: 4px
        background: #444
      &>i:first-child
        top:10px
      &>i:nth-child(2)
        top:19px
      &>i:nth-child(3)
        top:28px
      .first
        transform: translateY(9px) rotate(-45deg)
      .second
        opacity: 0
      .three
        transform: translateY(-9px) rotate(45deg)
    .hide
      position: fixed
      top: 0
      right: 0
      bottom: 0
      left: 0
      background-color: hsla(0,0%,100%,.7)
      z-index: -1
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
</style>
