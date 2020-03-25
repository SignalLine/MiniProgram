const TOKEN = 'token'
App({
  //对象：小程序关闭会回收
  globalData:{
    token:''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    //先从缓存去除token
    const token = wx.getStorageSync(TOKEN)
    //判断token是否有值
    if(token && token.length != 0){//有token,验证是否过期
      this.check_token(token)
    }else{//没有，进行登录
      this.login()
    }

    
  },
  //验证token是否过期
  check_token(token){
    console.log('执行验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res) => {
        console.log(res)
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

  login(){
    console.log('执行登录操作')
    //登录
    wx.login({
      success: (res) => {
        console.log(res)
        //获取code
        const code = res.code;

        //将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            const token = res.data.token;

            this.globalData.token = token;

            console.log(this.globalData.token)

            //本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})


