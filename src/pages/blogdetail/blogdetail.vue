<template>
  <div class="blogdetail">
    <navigation :blog="1"></navigation>
    <div class="page">
      <div class="blog-detail">
        <div class="blog-detail-contaner">
          <div class="header">
            <div class="header-cover no-cover"></div>
          </div>
          <div class="article-section">
            <div class="caption">
              <h1 class="titl">哈哈哈</h1>
              <p class="time">发布时间：<span>456：123</span></p>
            </div>
            <div class="article markdown-body">
              拉拉等级分啦拉水电费了垃圾地方了阿道夫ad发送的
              asdf阿斯顿发斯蒂芬阿斯顿发生阿斯顿发杀死对方阿斯顿发送到发放阿斯顿发生
              的故事大概拉拉等级分啦拉水电费了垃圾地方了阿道夫ad发送的
              asdf阿斯顿发斯蒂芬阿斯顿发生阿斯顿发杀死对方阿斯顿发送到发放阿斯顿发生
              的故事大概拉拉等级分啦拉水电费了垃圾地方了阿道夫ad发送的
              asdf阿斯顿发斯蒂芬阿斯顿发生阿斯顿发杀死对方阿斯顿发送到发放阿斯顿发生
              的故事大概
            </div>
            <div class="sns-share">
              <div @click.prevent="showDetail()">
                <i class="l-icon icon-money"></i>
                <span>打赏</span>
              </div>
            </div>
          </div>
        </div>
        <v-footer></v-footer>
      </div>
    </div>
    <transition name="fade">
      <!-- 遮罩层 -->
      <div class="many" v-show="detailShow" @click="hideDetail"></div>
    </transition>
      <!-- 内容层 -->
    <transition name="fade">
      <div class="modal-dialog" v-show="detailShow">
        <div class="modal-content">
          <div class="modal-header" @click="hideDetail">
            <i class="icon-cross"></i>
          </div>
          <div class="modal-boday">
            <div class="title">如果觉得我的文章对您有用，请随意打赏。你的支持将鼓励我继续创作！</div>
            <div class="img">
              <img src="/static/img/wechat.jpg" class="img-item">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '@/components/footer'
  import Navigation from '@/components/navigation'

  export default {
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail () {
        this.detailShow = true
      },
      hideDetail () {
        this.detailShow = false
      }
    },
    components: {
      'v-footer': Footer,
      Navigation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  // @import '../../common/css/prism.css'
  // @import '../../../../../node_modules/github-markdown-css/github-markdown.css'

  .blogdetail
    position:relative
    min-height:100%
    margin:0
    padding:0
    background: #dee3e7
    .page
      position: relative
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
          padding-bottom: 50px
          .header
            position: relative
            padding-top: 44%
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
              &.no-cover
                background: #1f3747
                background-image: -webkit-linear-gradient(left,#1f3747,#293d31)
          .article-section
            padding: 1em 0
            .caption
              padding: 0 20px
              .titl
                margin-bottom: .4em
                font-size: 20px
                font-weight:600
                color:#3d464d !important
              .time
                font-size: 14px
            .article
              padding: 40px 20px;
              font-size: 20;
              background: #fff;
              &:before
                display: table;
                content: "";
            .sns-share
              padding: 2em 0 2em
              text-align: center
              div
                display: inline-block;
                width: 80px;
                height: 80px;
                margin: 0 1em;
                border-radius: 50%;
                font-size: 1.2rem;
                color: #fff;
                background: #fa7d3c;
                i
                  display: block;
                  padding-top: 10px;
                  line-height: 30px;
                  font-size: 30px;
                .l-icon
                  font-family: layIcon;
                  font-style: normal;
                span
                  display: block;
                  line-height: 30px;
                  font-size: 14px;
          .comments-section
            position: relative
            padding: 2em 1em;
            background: #f5f8fa
            &:before
              position: absolute
              content: ""
              top: -1rem
              left: 50%
              margin-left: -2rem
              width: 0
              height: 0
              border-style: solid
              border-color: transparent transparent #f5f8fa
              border-width: 0 2rem 1rem
            .comments_frame
              .l_comments
                .l_com_sendBox
                  margin-bottom: 20px
                  background: #fff
                  border-radius: 2px
                  box-shadow: 0 0 2px rgba(0,0,0,.2)
                  .l_sendBox
                    padding: 20px 20px 20px 20px
                    background: #fff
                    .l_send_footer
                      height: 30px
                      padding-top: 10px
                      .l_send_right
                        float: right
                        .l_send_submit
                          display: inline-block;
                          padding: 0 20px;
                          font-size: 12px;
                          height: 30px;
                          line-height: 30px;
                          color: #fff;
                          background: #f90;
                          border-radius: 2px;
                          transition: all .1s linear;
                .l_com_list
                  .l_com_list_cnt
                    overflow: hidden
                    background: #fff
                    border-radius: 2px
                    box-shadow: 0 0 2px rgba(0,0,0,.2)
                    .l_com_item
                      position: relative
                      padding: 15px
                      border-top: 1px solid #eee
                      cursor: default
                      overflow: hidden
                      transition: all .1s linear
                      &:first-child
                        border: none
                      .avatar
                        float: left
                        width: 50px
                        height: 50px
                        border-radius: 12px
                        overflow: hidden
                        background: #ddd
                        img
                          width: 100%
                          height: 100%
                      .content
                        margin-left: 60px
                        .caption
                          margin-bottom: 10px
                          line-height: 18px
                          font-size: .85rem
                          font-weight: 500
                        .text
                          min-height: 20px
                          margin-bottom: 10px
                          line-height: 1.5
                          font-size: .85rem
                          color: #333
                          word-wrap: break-word
                          word-break: break-all
                        .footer
                          height: 20px
                          line-height: 20px
                          font-size: .85rem
                          .time
                            float: left
                            color: #aaa
                          .btn-reply
                            color: #aaa
                            float: right
    .many
      position: fixed
      top: 0
      right: 0
      bottom: 0
      left: 0
      z-index: 50
      background-color: hsla(0,0%,100%,.7)
      text-align: center
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
    .modal-dialog
      width: 350px;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 30px auto
      z-index: 100
      text-align: center
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
      .modal-content
        box-shadow: 0 5px 25px rgba(0,0,0,.1);
        border: 1px solid rgba(0,0,0,.1);
        overflow: hidden;
        position: relative;
        background-color: #fff;
        border-radius: 6px;
        background-clip: padding-box;
        outline: 0;
        .modal-header
          float: right
          font-size: 15px
          margin-top: 20px
          margin-right: 20px
          cursor: pointer
        .modal-boday
          padding: 20px 20px 10px 20px
          .title
            margin-top: 40px
            font-size: 16px
            line-height: 18px
          .img
            .img-item
              width: 300px
              height: 300px
</style>
