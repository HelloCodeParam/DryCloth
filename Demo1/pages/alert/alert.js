Page({
	data:{
		modelhidden: true,
		size: 30,
		markers: [{
	      iconPath: "/pages/image/ss.jpg",
	      id: 0,
	      latitude: 23.099994, 
	      longitude: 113.324520,
	      width: 50,
	      height: 50
	    },{
	      iconPath: "/pages/image/ss.jpg",
	      id: 1,
	      latitude: 23.199994,
	      longitude: 113.324520,
	      width: 50,
	      height: 50
	    }]
	},
	onLoad: function(options){
		//获取当前的位置信息
		var that = this;
		wx.getLocation({
			type: 'wgs84',
			success: function(res){
				var latitude = res.latitude;
		        var longitude = res.longitude;
		        var speed = res.speed;
		        var accuracy = res.accuracy;
				that.setData({
					polyline: [{
				    	points: [{
				    		latitude: latitude,
				      		longitude: longitude
				    	},{
				    		latitude: 23.099994,
				      		longitude: 113.324520
				    	}],
				    	color:"#FF0000DD",
					    width: 2,
					    dottedLine: true
				    }]
				});
				console.log(that.data.this_latitude+"  "+
					that.data.this_longitude);
			},
			fail: function(res){},
			complete: function(res){}
		})
	},
	alertshow: function(){
		var that = this;
		that.setData({
			modelhidden: false
		})
	},
	submit: function(){
		this.setData({
			modelhidden: true
		})
	},
	reset: function(){
		this.setData({
			modelhidden: true
		})
	},
	markertap: function(){
		console.log("您点击了标记点");
	},
	regionchange: function(){
		console.log("您的视野发生了变化");
	},
	clickMap: function(){
		console.log("您点击了地图");
	},
	gonext: function(){
		wx.navigateTo({
			url: '/pages/daohang/daohang',
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
	},
	equals: function(){
		if("hello" == "hello"){
			console.log("hello 等于 hello");
		}else{
			console.log("hello 不等于 hello");  
		}
	}

})