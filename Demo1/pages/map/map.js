Page({

	data: {
		openId:null
	},
	onLoad: function(res){

	},
	clickToMap: function(){
		wx.getLocation({
			type: 'gcj02',
			success: function(res){
				var latitude = res.latitude;
				var longitude = res.longitude;
				wx.openLocation({
					name: '淮安',
					address: '依丽洁干洗',
					latitude: latitude,
					longitude: longitude,
					scale: 15
				})
			}
		})
	},
	getUserInfo: function(){
		var that = this;
		wx.login({
			success: function(res){
				console.log(res.code);
				wx.request({
					url: 'http://localhost:8080/WeChatLogin/openId.action?appid=wxf413c46135a6b63c&js_code='+res.code+'&secret=9fa38aecb84bebe83188646500d7ed8d',
					method: 'GET',
					header: {
						'content-type': 'application/json'
					},
					success: function(res){
						var json = res.data;
						console.log(res.data);
						that.setData({
							openId: json.openid
						})
					},
					fail: function(res){

					}
				})
			}
		})
	}

})