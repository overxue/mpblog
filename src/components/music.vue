<template>
  <div class="music" :class="{'hide': hide}">
    <div class="music-item" :class="{'rotate': listen}" @click="playMusic">
      <audio loop :src=link id="media" autoplay="" preload="" ref="audio"></audio>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        listen: true,
        hide: false,
        link: 'http://music.163.com/song/media/outer/url?id=38358214.mp3'
      }
    },
    methods: {
      playMusic () {
        if (this.listen) {
          this.listen = false
          this.$refs.audio.pause()
          return
        }
        this.listen = true
        this.$refs.audio.play()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .music
    position: relative
    &.hide
      display: none
    .music-item
      position: absolute
      top: 10px
      right: 10px
      width: 36px
      height: 36px
      background-image: url(../../static/img/music_pause.png)
      background-size: 36px 36px
      background-repeat: no-repeat
      z-index: 100
      &.rotate
        background-image: url(../../static/img/music.gif)
</style>
