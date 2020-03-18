App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })  
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //根据小程序打开场景判断
    console.log(options)
    switch(options.scene){
      case 1001:
        //小程序点击进入

        break;
      case 1005:
        break;
      case 1011:
        //扫描二维码进入

        break;
    }
    //2.获取用户信息，并将用户信息传递给服务器
    wx.getUserInfo({
      success:function(res){
        //
      }
    })  
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
    
  },

  //-------定义全局数据--------------
  globalData:{
    name:"zhouya",
    age:18
  }

})
