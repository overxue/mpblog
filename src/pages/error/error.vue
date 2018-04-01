<template>
  <div class="error">
    <navigation :error="number" @show="showgun"></navigation>
    <div class="page">
      <div class="page-item">
        <div class="xianzhi">由于小程序限制跳转至外部网页，您可以通过以下网址访问。</div>
        <div class="message" @click="copy(message)">{{message}}  <span style="color: #95a5a6">(点我复制)</span></div>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '@/components/footer'
  import Navigation from '@/components/navigation'

  export default {
    data () {
      return {
        message: '',
        number: ''
      }
    },
    mounted () {
      if (parseInt(this.$root.$mp.query.id) === 1) {
        this.message = 'https://weibo.com/u/3090183841?is_hot=1'
        this.number = 'weibo'
      } else {
        this.message = 'https://github.com/overxue'
        this.number = 'github'
      }
    },
    methods: {
      copy (message) {
        wx.setClipboardData({
          data: message,
          success: function () {
            wx.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 2000
            })
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
  .error
    position:relative
    min-height:100%
    margin:0
    padding:0
    .page
      padding: 10px
      .page-item
        margin-top: 200px
        color: #24292e
        .xianzhi
          text-align: center
          line-height: 1.2
        .message
          color: deepskyblue
          margin-top: 20px
          font-size: 14px
          text-align: center
</style>
