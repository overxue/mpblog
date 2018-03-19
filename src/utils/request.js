export function request (requesturl) {
  const url = 'http://blog.test'
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}${requesturl}`,
      data: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        resolve(res)
      }
    })
  })
}
