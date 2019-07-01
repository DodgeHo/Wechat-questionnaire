//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    tables:[
      { text: 'PDQ-4', id: 'tb1'},
      { text: '更多测试尽情期待', id: '0'},

    ]

    
    
  },
  //事件处理函数
  bindViewTap: function(event) {
    if (event.target.id==0){
      wx.navigateTo({
        url: 'index' ,
      })
    }

    else{
    wx.navigateTo({
      url: '../tables/' + event.target.id + '/' + event.target.id,
    })}
  },

  

 
})
