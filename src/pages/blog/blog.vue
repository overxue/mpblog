<template>
  <div class="blog">
    <navigation :blog="1"></navigation>
    <div class="pages">
      <div style="min-height: 100%">
        <div class="header">
          <div class="mac">
            <div class="logo">
              <img src="/static/img/php.jpg">
            </div>
            <p>一个不羁的码农,我的世界不只有coding</p>
          </div>
        </div>
        <div class="articleListPage-tags-cnt">
          <div>
            <div class="articleListPage-tags">
              <div class="grid-row">
                <div class="content">
                  <div v-for="(item, index) in categories" :class="{'active':selectType === item.id}" @click="selectCategory(item.id)">{{item.name}}<span v-if="item.articles_count">{{item.articles_count}}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="article-item">
            <div v-for="(item, index) in articles" class="article-list">
              <div class="label" v-show="index == 0 || index == 1"><span>new</span></div>
              <h1 class="title">
                <a href="../blogdetail/blogdetail?id=4">{{item.title}}</a>
              </h1>
              <div class="introduction">
                  <i class="icon-user">
                    <span class="user">XueCong</span>
                  </i>
                  <i class="icon-clock">
                    <span class="time">{{item.created_at}}</span>
                  </i>
                  <i class="icon-eye">
                    <span class="view">{{item.view_count}}</span>
                  </i>
              </div>
              <div class="article-content">
                {{item.excerpt}}
              </div>
              <div class="readmore">
                <div class="left">
                  <i class="icon-price-tags">
                    <i class="tage" v-for="(category, admi) in item.categories.data">{{category.name}}</i>
                  </i>
                </div>
                <div class="right">
                  <a href="javascript:void(0)" @click="goDetail(item.id)" class="readmore" style="display:inline;">阅读全文 <span>>></span></a>
                </div>
              </div>
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
  import { request } from '@/utils/request'
  import timeago from 'timeago.js'
  // import fly from 'flyio/dist/npm/wx'

  export default {
    data () {
      return {
        selectType: 0,
        categories: [],
        articles: []
      }
    },
    created () {
      this._getCategory()
      this._getArticle()
      // fly.get('https://www.overxue.com/api/categories').then((res) => {
      //   console.log(res)
      // })
      // fly.get('https://www.overxue.com/api/categories', {xx: 6}).then((d) => {
      //   // 输出请求数据
      //   console.log(d.data)
      //   // 输出响应头
      //   console.log(d.header)
      // }).catch(err => {
      //   console.log(err.status, err.message)
      // })
    },
    methods: {
      _getCategory () {
        request('/api/categories').then((res) => {
          if (res.statusCode === 200) {
            res.data.data.unshift({
              id: 0,
              name: '全部标签'
            })
            this.categories = res.data.data
          }
        })
      },
      _getArticle () {
        request('/api/articles?page=1&include=categories').then((res) => {
          if (res.statusCode === 200) {
            res.data.data.forEach((res) => {
              res.created_at = timeago().format(res.created_at, 'zh_CN')
            })
            this.articles = res.data.data
          }
        })
      },
      selectCategory (id) {
        if (this.selectType === id) {
          return
        }
        this.selectType = id
        if (this.selectType === 0) {
          this._getArticle()
          return
        }
        request(`/api/categories/${id}/articles?include=categories`).then((res) => {
          if (res.statusCode === 200) {
            res.data.data.forEach((res) => {
              res.created_at = timeago().format(res.created_at, 'zh_CN')
            })
            this.articles = res.data.data
          }
        })
      }
    },
    components: {
      'v-footer': Footer,
      Navigation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .blog
    position:relative
    min-height:100%
    margin:0
    padding:0
    background: #dee3e7
    .pages
      position: relative
      padding-bottom: 45px
      overflow: hidden
      // position: absolute
      // top: 0
      // bottom: 0
      // overflow: hidden
      width: 100%
      .header
        position: relative
        padding: 60px 0 20px
        background: #fafafa
        &:before
          content: ""
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          height: 50px
          background: #fff
          background-image: linear-gradient(#fafafa,#fff)
        .mac
          position: relative
          width: 70%
          height: 130px
          margin: auto
          padding-top: 30px
          text-align: center
          background: #fafafa
          background: linear-gradient(to right bottom,#fff,#eee)
          border: 6px solid #222
          border-width: 6px 6px 8px
          border-radius: 8px 8px 0 0
          &:after
            content: ""
            position: absolute
            width: 134%
            left: -17%
            bottom: -14px
            height: 6px
            border-radius: 0 0 40px 40px/0 0 5px 5px
            background: #ccc
          .logo
            margin-bottom: 15px
            img
              width: 70px
              height: 70px
              overflow: hidden
              border-radius: 50%
              background: #FFF
              box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 5px, rgba(0, 0, 0, 0.15) 0 0 5px 4px
              transition: transform .4s ease-out
            img:hover
              transform: rotate(360deg)
          p
            font-size: 13px
            color: #333
      .articleListPage-tags-cnt
        margin-bottom: 20px
        .articleListPage-tags
          position: static!important
          width: 100%
          background: #fff
          border-bottom: 1px solid #c4cdd4
          z-index: 5
          .grid-row
            width: 100%
            position: relative
            margin: auto
            zoom: 1
            transition: all .3s ease-out
            &:after
              content: "."
              display: block
              height: 0
              clear: both
              visibility: hidden
            .content
              padding: 12px 0 5px 10px
              div
                position: relative
                display: inline-block
                max-width: 100%
                height: 24px
                margin: 0 10px 5px 0
                line-height: 24px
                padding: 0 8px 0 18px
                border-radius: 0 4px 4px 0
                background: #eee
                font-size: 12px
                color: #333
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                box-sizing: border-box
                &:before
                  position: absolute
                  content: ""
                  top: 0
                  left: 0
                  width: 0
                  height: 0
                  border-width: 12px 12px 12px 0
                  border-color: #fff transparent
                  border-style: solid
                &:after
                  position: absolute
                  content: ""
                  width: 4px
                  height: 4px
                  top: 10px
                  left: 8px
                  border-radius: 100%
                  background: #fff
                &.active
                  background: #f70
                  color: #fff
                span
                  opacity: 0.3
                  padding: 0 0 0 5px
      .article
        margin: 0 10px
        .article-item
          padding-bottom: 10px
          .article-list
            position: relative
            background: #fff
            padding: 20px
            margin-bottom: 15px
            .label
              position: absolute
              top: 0
              right: 0
              width: 30px
              height: 30px
              background: #f70
              box-shadow: -1px 1px 2px #000
              &:before
                position: absolute
                content: ""
                width: 0
                height: 0
                top: 0
                right: 0
                border: 1px solid #fff
                border-width: 0 30px 30px 0
                border-color: transparent transparent #fff
              span
                position: absolute
                display: block
                top: 0
                right: 0
                width: 100%
                height: 100%
                -webkit-transform: rotate(45deg) scale(.8)
                transform: rotate(45deg) scale(.8)
                text-align: center
                line-height: 15px
                color: #fff
                font-size: 15px
            .title
              line-height: 20px
              a
                font-size: 20px
                font-weight: 600
                color: #3d464d!important
                cursor: pointer
            .introduction
              margin: 15px 0
              .icon-user, .icon-clock, .icon-eye
                color: #95a5a6
                font-size: 14px
                line-height: 14px
                margin-right: 10px
                display: inline-block
                .user, .time, .view
                  margin-left: 5px
                  font-size: 14px
                  line-height: 14px
            .readmore
              width: 100%
              margin-top: 15px
              margin-bottom: 30px
              .left
                float: left
                .icon-price-tags
                  font-size: 14px
                  line-height: 14px
                  color: #f70
                  .tage
                    color: #333
                    font-size: 14px
                    background: #eee
                    margin: 0 5px 0 5px
                    padding: 1px 5px
                    border-radius: 4px
                    display: inline-block
              .right
                float: right
                .readmore
                  color: #f70
                  font-size: 14px
                  font-weight: 600
                  line-height: 14px
</style>
