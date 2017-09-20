Page({
	data: {
		arrays: [
			{
				name: 'shanghai',
				value: '上海',
				checked: 'true'
			},
			{
				name: 'beijing',
				value: '北京'
			},
			{
				name: 'nanjing',
				value: '南京'
			}
		],
		sex:['男','女']
	},
	onLoad: function(options){

	},
	checkboxchange: function(e){
		console.log(e.detail.value);
	},
	radiochange: function(res){
		console.log(res.detail.value);
	},
	fromSubmit: function(res){
		console.log(res.detail);
		var text = res.detail.value;
		console.log(text.text);
		console.log(text.city);
		console.log(text.sex);
		console.log(text.textarea);
		this.setData({
			name: text.text,
			city: text.city,
			sex: text.sex,
			textarea: text.textarea
		})
	},
	goNext: function(){
		wx.navigateTo({
			url: '/pages/alert/alert',
			success: function(res){},
			fail: function(res){},
			complete: function(res){}
		})
	}


})