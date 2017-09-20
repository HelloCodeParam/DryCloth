Page({
	data:{
		imagePath: '',
		imageList: '',
		src: '',
		key: 'keys',
		look: '查看key-value数据'
	},
	onReady: function(res){
		this.audioCtx = wx.createAudioContext('myAudio');
		this.audioCtx.setSrc('http://om5.alicdn.com/169/7169/2102809552/1796438401_1502068086879.mp3?auth_key=d80cc7d0833b62d967701bce0b4f8141-1503543600-0-null');
		this.audioCtx.play()
	},
	selectImage: function(){
		var that = this;
		wx.chooseImage({
			count: 2,
			sizeType: ['original','compressed'],
			sourceType: ['album','camera'],
			success: function(res){
				that.setData({
					imagePath: res.tempFilePaths[0],
					imageList: res.tempFilePaths
				})
			},
			fail: function(res){

			}
		})
	},
	lookImage: function(res){
		var that = this;
		wx.previewImage({
			urls: that.data.imageList
		})
	},
	savechange: function(res){
		var that = this;
		var value = res.detail.value;
		if(value !== null){
			console.log(res.detail.value);
			that.setData({
				data: value
			})
		}
	},
	save: function(res){
		wx.setStorage({
			key: this.data.key,
			data: this.data.data,
			success: function(res){
				console.log('保存成功');
			}
		})
	},
	lookSomeValue: function(res){
		var that = this;
			wx.getStorage({
			key: this.data.key,
			success: function(res){
				that.setData({
					look: res.data
				});
				console.log(res.data);
			}
		})
	},
	getInfo: function(){
		wx.getStorageInfo({
			success: function(res){
				console.log(res.keys);
				console.log("当前使用了："+res.currentSize);
				console.log("可存储的大小："+res.limitSize);
			}
		})
	},
	removeKeyValue: function(){
		var that = this;
		wx.removeStorage({
			key: this.data.key,
			success: function(res){
				console.log("移除成功了");
				that.setData({
					look: ''
				})
			}
		})
	},
	clearAll: function(){
		wx.clearStorage();
	},
	goNext: function(){
		wx.navigateTo({
			url: '/pages/map/map',
			success: function(){},
			fail: function(){},
			complete: function(){}
		})
	}

})