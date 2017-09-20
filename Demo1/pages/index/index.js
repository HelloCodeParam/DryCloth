//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
  	array:[
  		{
  			"name":"张三",
  			"age":'20',
  			"school":"南京科技职业学院",
  		},
  		{
  			"name":"李四",
  			"age":'22',
  			"school":"上海交通大学",
  		},
  		{
  			"name":"王五",
  			"age":'21',
  			"school":"徐州医科大学",
  		}
  	],
  	number: 10
  },
  scroll: function(e){
  	var scr_height = e.detail.scrollTop;
  	if(scr_height % 10 ===0){
  		console.log(scr_height);
  	}
  },
  //按钮跳转  带有参数的跳转
  btn_click: function(e){
  	wx.navigateTo({
      url: '/pages/logs/logs?name=zhuchaoyang&age=20',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  }

})
