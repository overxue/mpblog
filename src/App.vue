<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
page {
  height: 100%;
  line-height: 1;
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', 'arial', 'sans-serif', 'Droid Sans Fallback', 'Helvetica neue', 'Microsoft Yahei', 'Helvetica', 'Tahoma', 'lantinghei sc';
  -webkit-tap-highlight-color: transparent;
  background: #fff;
}
navigator  {
  color: #7e8c8d;
}

.navigator-hover{
  background-color: #fff;
  opacity: 1;
}
</style>
