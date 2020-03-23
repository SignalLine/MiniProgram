// pages/home/home.js
Page({

  //监听调用组件内方法
  handleIncrementCpn(event){
    const my_sel = this.selectComponent('#sel-id')
    console.log(my_sel)

    //通过setData修改组件中的数据
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })

    my_sel.incrementCounter(10)
  },


  handleIncrement(event){
    console.log(event.detail.name,event.detail.age)

    this.setData({
      counter:this.data.counter + 1
    })
  },

  //tab-control点击回调
  handleTitleClick(event){
    console.log('当前index=',event.detail.index)
  },

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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