Page({
	data:{},
	onLoad: function(options){
		var that = this;
		wx.request({
			url:'https://www.mokeylife.cn/allCoups.action',
			method: 'GET',
		    header: {
		      "Content-Type": "application/json"
		    },
			success: function(res){
				console.log(res.data);
				that.setData({
					idea: res.data
				})
			},
			fail: function(res){

			},
			complete: function(res){

			}
		})
	},
	showNext: function(){
		wx.navigateTo({
			url: '/pages/imagepage/imagepage',
			success: function(res){},
			fail: function(){},
			complete: function(){}
		})
	}
})