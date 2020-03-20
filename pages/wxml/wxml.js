// pages/wxml/wxml.js
Page({

  handleSwitchColor(){
    console.log('--------')

    this.setData({
      isActive : !this.data.isActive
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    message:'信息',
    firstname: '你',
    lastname: '谁啊',
    age : 12,

    nowTime : new Date().toLocaleString(),
    nowTime2 : new Date().toString(),
    nowTime3 : new Date().toDateString(),
    nowTime4 : new Date().toTimeString(),

    isActive:false,
    isShow:true,
    score:50,
    movies:["我是","水啊","什么","东西"],
    letters: ['a', 'b', 'c']
  },

  handleIncrement(){
    this.setData({
      score:this.data.score + 6
    })
  },

  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})