// pages/home/home.js
import request from '../../utils/network.js'

Page({

  //点击组件跳转详情页
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=bbb&age=18',
    })
  },

  //点击showToast弹窗
  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      duration:1500,
      icon:'loading',
      //显示后面的按钮不可点击
      mask:true
    })
  },
  //
  handleShowModal(){
    wx.showModal({
      title: '标题',
      content: '内容',
      cancelColor:'red',
      cancelText:'取消',
      success:function(res){
        if(res.cancel){
          console.log('取消')
        }
        if(res.confirm){
          console.log('确定')
        }
      }
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载...',
      mask: true,
    })

    setTimeout(() => {
      //必须手动调用隐藏loading
      wx.hideLoading()
    },1000)
    
  },

  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['a','b'],
      itemColor:'red',
      success:function(res){
        console.log(res.tapIndex)
        
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   * http://123.207.32.32:8000/recommend
   * http://123.207.32.32:8000/home/data?type=sell&page=1
   */
  onLoad: function (options) {
    //原生调用
    this.get_data_origin()

    //封装调用 Promise最大的好处就是防止出现回调地狱
    request({
      url:'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  get_data_origin(){
    //发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function (res) {
        console.log(res)
      }
    })

    wx.request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        type: 'sell',
        page: 1
      },
      success: function (res) {
        console.log(res)
      }
    })
    //post 并且携带参数
    wx.request({
      url: 'http:/httpbin.org/post',
      method: 'post',
      data: {
        name: 'sell',
        age: 15
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function () {
        //接口调用结束回调的函数
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * http://123.207.32.32:9000/personalized/privatecontent
   * http://123.207.32.32:9000/banner?type=2
   */
  onReady: function () {
    wx.request({
      url: 'http://123.207.32.32:9000/album/newest?offset=6',
      success: function (res) {
        console.log(res)
      }
    })
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
    return {
      title:'页面标题',
      path:'/pages/about/about',
      imageUrl:'图片地址:本地/网络'
    }
  }
})