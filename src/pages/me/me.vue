<template>
  <div class="me" :class="{'detail': show}">
    <navigation :me="1" @show="showgun"></navigation>
    <div class="page" ref="aboutme">
      <div class="blog-detail">
        <div class="blog-detail-contaner">
          <div class="header">
            <div class="header-cover no-cover">
              <div class="header-body">
                <div class="avatar">
                  <img src="/static/img/avatar.jpg" class="avatar-item">
                </div>
                <div class="tit">薛聪</div>
              </div>
            </div>
          </div>
          <div class="article-section">
            <div class="article markdown-body">
              <ul>
                <li>我不是大神，我只是一枚有点帅的普通php开发者，擅长写各类bug，专业制造bug 30年！</li>
                <li>爱编程，爱开源，爱分享，爱赚钱，爱生活！</li>
                <li>我的人生格言：<strong>不要怂，就是干！</strong></li>
                <li>我很认真，对于任何事！</li>
                <li>我比较直爽，性格幽默！</li>
                <li>我很帅，不管你信不信！</li>
                <li>从17年开始搭建博客，希望这件事可以一直坚持下去！</li>
                <li>这里不仅是我的技术分享，也是我人生路的记载！</li>
                <li>这个博客其实帮助不了你什么，除了能让你变得跟我一样帅！</li>
                <li>认真生活，认真扯淡！</li>
                <li>完。</li>
              </ul>
            </div>
          </div>
        </div>
        <v-footer></v-footer>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '@/components/footer'
  import Navigation from '@/components/navigation'

  export default {
    data () {
      return {
        show: false
      }
    },
    components: {
      'v-footer': Footer,
      Navigation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  // @import '../../../node_modules/github-markdown-css/github-markdown.css'

  .me
    position:relative
    min-height:100%
    margin:0
    padding:0
    background: #dee3e7
    &.detail
      height: 100%
      overflow: hidden
    .page
      padding-bottom: 45px
      overflow: hidden
      width: 100%
      .blog-detail
        padding: 0
        background: #dee3e7
        min-height: 100%
        .blog-detail-contaner
          max-width: 1000px
          margin: 0 auto
          background: #fff
          padding-bottom: 30px
          .header
            position: relative
            padding-top: 55%
            background-color: #eee
            background-size: cover
            background-position: 50%
            .header-cover
              position: absolute
              width: 100%
              height: 100%
              top: 0
              left: 0
              overflow: hidden
              text-align: center
              &.no-cover
                background: #1f3747
                background-image: -webkit-linear-gradient(left,#1f3747,#293d31)
              .header-body
                display: block
                margin-top: 20px
                .avatar
                  img
                    width: 120px
                    height: 120px
                    overflow: hidden
                    border-radius: 50%
                    background: $color-background
                    box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 5px, rgba(0, 0, 0, 0.15) 0 0 5px 4px
                    transition: transform .4s ease-out
                  img:hover
                    transform: rotate(360deg)
                .tit
                  margin-top: 15px
                  line-height: 1.2
                  font-size: 26px
                  font-weight: 500
                  color: #fff
          .article-section
            padding: 1em 0
            .caption
              padding: 0 20px
              .titl
                margin-bottom: .4em
                font-size: 1.8rem
              .time
                font-size: 14px
            .article
              padding: 40px 20px
              font-size: 15px;
              background: #fff
              &:before
                display: table
                content: ""
</style>
