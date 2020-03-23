// components/my-style/my-style.js
Component({
  //会使组件样式收到影响    样式隔离 isolated默认值
  //apply-shared 表示页面wxss样式将影响到自定义组件，但自定义组件的wxss中指定的样式不会影响页面
  //shared 表示页面wxss样式将影响到自定义组件，自定义组件wxss中指定的样式也会影响页面和其他设置
  //isolated 标识启用样色隔离，在自定义组件内外，使用class指定的样式不会互相影响
  /**
   * 定义组件的配置选项
   * multipleSlots 在使用多插槽时需要设置为true
   * styleIsolation 设置样式的隔离方式
   */
  options:{
    styleIsolation: "shared"
  },

  /**
   * 组件的属性列表 让使用者可以给组件传入数据
   */
  properties: {
    titles:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据,内部组件初始化数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },


  //-------------外交给组件传入额外的样式------------------
  externalClasses:[],

  //-----------可以监听组件属性的改变properties/data-----------------
  observers:{
    counter:function(newVal){
      console.log(newVal)
    }
  },

  //---------组件中监听生命周期函数-----------------------------
  /**
   * 1.监听所在页面的生命周期
   * 2.监听组件本身的生命周期
   */
  //1.监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来的')
    },
    hide(){
      console.log('监听组件所在页面隐藏起来的')
    },
    resize(){
      console.log('监听页面尺寸的改变')
    }
  },
  //2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('组件创建出来')
    },
    attached(){
      console.log('组件被添加到页面')
    },
    ready(){
      console.log('组件被渲染出来')
    },
    moved(){
      console.log('组件被移动到另外一个节点')
    },
    detached(){
      console.log('组件被移除掉')
    }
  }

})
