// pages/email/sendemail.js

var util = require('../../utils/util.js')
const db = wx.cloud.database()

Page({

  //点击发送邮件 handleSendEmail  amvwkszcmaqtbfff
  handleSendEmail(){
    wx.cloud.callFunction({
      name : 'sendEmail',
      success(res){
        console.log("发送成功",res)
      },
      fail(err){
        console.log("发送失败", err)
      }
    })
  },

  handleSendEmail2(fileName,filePath) {
    wx.cloud.callFunction({
      name: 'sendEmail',
      data:{
        'from': '来自灼灼<1019685826@qq.com>',
        'subject': '亲(づ￣3￣)づ╭❤～',
        //收件人
        'to': '13023387198@163.com',
        //邮箱内容 text或者html
        'text': '亲(づ￣3￣)づ╭❤～',
        'attachments':
          [
            {
              'filename': fileName,            // 改成你的附件名
              'path': filePath,  // 改成你的附件路径
            }
          ]
      },
      success(res) {
        console.log("发送成功2", res)
      },
      fail(err) {
        console.log("发送失败2", err)
      }
    })
  },

  //上传文件
  handleUploadFile(){
    // const fileStream = fs.createReadStream(path.join(_dirname,'InspectMould.xls'))
    wx.chooseMessageFile({
      count:1,
      type:'file',
      success:(res) =>{
        const name = res.tempFiles[0].name;
        const path = res.tempFiles[0].path;
        console.log('name--->',name)
        console.log('path--->',path)
        wx.cloud.uploadFile({
          cloudPath: 'upload/file/' + name,
          filePath:path,
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: res => {
            console.log(res.fileID)
            const result = wx.cloud.getTempFileURL({
              fileList: [res.fileID],
              success: (res) =>{
                console.log('fileList--->', res.fileList)
                this.handleSendEmail2(name, res.fileList[0].tempFileURL)
              },
              fail:console.error
            })
          }
        })
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

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