export function request (requesturl) {
  const url = 'https://www.overxue.com'
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
