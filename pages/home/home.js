// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const types = ['pop','new','sell']
const BACK_TOP_POSITION = 1000;

Page({

  data: {
    banners:[],
    recommends:[],

    titles: ['流行', '新款', '精选'],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    topPosition: 0,
    tabControlTop: 0,
    showBackTop: false,
    showTabControl: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图及推荐数据
    this._getMultiData()

    //请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  /**
   * ------------------------网络请求轮播图及推荐数据-----------------------
   */
  _getMultiData(){
    getMultiData().then(res => {
      console.log(res)
      //取出轮播图和推荐数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      //将banners和recommends放到data中
      this.setData({
        banners: banners,
        recommends: recommends
      })

    })
  },

  _getGoodsData(type){
    //获取页码
    const page = this.data.goods[type].page + 1;
    //发送网络请求
    getGoodsData(type,page).then(res => {
      console.log(res)
      //保存请求的网络数据
      // 1.取出数据
      const list = res.data.data.list;

      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
    })
  },

/**
 * --------------------事件监听-------------------------------
 */
  //绑定tab点击事件
  handleTabClick(event){
    console.log(event)
    //取出index
    const index = event.detail.index;
    //设置currentType
    const type = types[index]
    this.setData({
      currentType: type
    })
    console.log(this.selectComponent('.tab-control'));
    this.selectComponent('.tab-control').setCurrentIndex(e.detail.index)
    this.selectComponent('.tab-control-temp').setCurrentIndex(e.detail.index)
  },

  onBackTop() {
    // wx.pageScrollTo({
    //   scrollTop: 0,
    //   duration: 0
    // })
    this.setData({
      showBackTop: false,
      topPosition: 0,
      tabControlTop: 0
    })
  },

  scrollPosition(e) {
    // 1.获取滚动的顶部
    const position = e.detail.scrollTop;

    // 2.设置是否显示
    this.setData({
      showBackTop: position > BACK_TOP_POSITION,
    })

    wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
      const show = rect.top > 0
      this.setData({
        showTabControl: !show
      })
    }).exec()
  },
  onImageLoad() {
    wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
      this.setData({
        tabControlTop: rect.top
      })
    }).exec()
  },

  onPageScroll(res) {

  },

  //当滚动到底部
  onReachBottom(){
    //上拉加载更多
    this._getGoodsData(this.data.currentType)
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