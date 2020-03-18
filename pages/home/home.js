// pages/home/home.js
//getApp()获取App()产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name)
console.log(age)

//注册一个页面，页面有自己的生命周期
Page({

  handleGetUserInfo(event) {
    console.log("-------------------")
    console.log(event)
  },

  handleViewClick(){
    console.log('哈哈被点击了')
  },

  /**
   * 页面的初始数据
   */
  data: {
    message: "哈哈哈哈",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad")
    wx.request({
      //需要将地址配置到控制台
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成 执行在onShow之后
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示  执行在onReady之前
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

//*******************其他事件监听************************ */

  onPageScroll(obj){
    console.log(obj)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('页面滚动到底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})