//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
  	name: null,
  	age: null,
  	background: [
  		'green','yellow','red'
  	],
  	switchArray:[
  		{
  			id: 1,
  			unique: "key1"
  		},
  		{
  			id: 2,
  			unique: "key2"
  		},
  		{
  			id: 3,
  			unique: "key3"
  		}
  	],
  	color1: 'green',
  	color2: 'yellow',
  	color3: 'red',
  	colorItem:{
  		color1: 'green',
  		color2: 'yellow',
  		color3: 'red'
  	}
  },
  onLoad: function(options){
    this.setData({
    	name: options.name,
    	age: options.age
    })
  },
  click_switch: function(){
  	var that = this;
 	var switchText = this.data.switchArray;
 	/**
 	 * 因为length本来就多1
 	 * @type {Number}
 	 */
 	switchText[switchText.length] = {id:(switchText.length+1),unique:"key4"};
 	that.setData({
 		switchArray: switchText
 	})
 	},
 	nextPage: function(){
 		wx.navigateTo({
 			url: '/pages/jspage/jspage',
 			success: function(res){
        console.log(res);
 			},
 			fail: function(res){
        console.log(res);
 			},
 			complete: function(res){
        console.log(res);
 			}
 		})
 	}


})