// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')


cloud.init()

//引入发送邮件的类库
var nodemailer = require('nodemailer')
//创建一个SMTP客户端配置
var config = {
  service:'qq',
  host: 'smtp.qq.com', //网易163 smtp.163.com
  port: 465, //网易邮箱端口 25
  auth:{
    user: '1019685826@qq.com', // 邮箱账号
    pass: 'amvwkszcmaqtbfff'   //邮箱授权码
  }
};

//创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);

// 云函数入口函数
exports.main = async (event, context) => {
  //创建一个邮件对象
  var mail = {
    //发件人
    from: '来自灼灼<1019685826@qq.com>',
    subject: '亲(づ￣3￣)づ╭❤～',
    //收件人
    to: '13023387198@163.com',
    //邮箱内容 text或者html
    text: '亲(づ￣3￣)づ╭❤～，你在忙什么呢，有没有在想我啊', //可以是链接也可以是验证码
  };
  console.log('------------>',event)
  var mail2 = {
    //发件人
    from: event.from,
    subject: event.subject,
    //收件人
    to: event.to,
    //邮箱内容 text或者html
    text: event.text, //可以是链接也可以是验证码
    attachments: event.attachments
  };

  // let res = await transporter.sendMail(mail);
  let res = await transporter.sendMail(mail2);

  return res;
}