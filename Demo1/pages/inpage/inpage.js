Page({
	data:{
		showtext: null,
		radiotext:[
			{
				name: 'meiguo',
				value: '美国',
				checked: true
			},
			{
				name: 'zhongguo',
				value: '中国'
			},
			{
				name: 'riben',
				value: '日本'
			}
		],
		switchstatus: '未开',
		timestart: '09:01',
		timeend: '22:59',
		datestart: '2015-01-01',
		dateend: '2017-12-31',
		array:['请选择','美国','中国','日本','加拿大','法国'],
		index: 0,
		time: '请选择时间',
		date: '请选择日期',
		region: ['广东省', '广州市', '海珠区']
	},

	focus: function(){
		console.log("获取焦点了");
	},
	blur: function(){
		console.log("失去焦点了");
	},
	showthistext: function(e){
		this.setData({
			showtext: e.detail.value
		})
	},
	radiochange: function(res){
		console.log(res.detail.value);
	},
	switchchange: function(e){
		console.log(e.detail.value);
		if(e.detail.value){
			this.setData({
				switchstatus: '已开'
			})
		}else{
			this.setData({
				switchstatus: '未开'
			})
		}
	},
	changetime: function(e){
		console.log(e.detail.value);
		console.log(this.data.array[e.detail.value]);
		this.setData({
			index: e.detail.value
		})
	},
	changetime2: function(e){
		this.setData({
			time: e.detail.value
		})
	},
	changetime3: function(e){
		this.setData({
			date: e.detail.value
		})
	},
	gonext: function(){
		wx.navigateTo({
			url: '/pages/form/form',
			success: function(res){

			},
			fail: function(res){

			},
			complete: function(res){

			}
		})
	}


})