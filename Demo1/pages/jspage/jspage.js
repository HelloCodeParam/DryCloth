var	yuantext = '这是第一行文字\n这是第二行文字'
Page({
	extralLine: [],
	data:{
		color: 'green',
		text: yuantext,
		icons:[
			'success','info','warn','waiting','waiting_circle',
			'cancle','clear'
		],
		size: 30,
		checkboxitems:[
			{
				name: 'beijing',
				value: '北京',
				checked: true
			},
			{
				name: 'shanghai',
				value: '上海'
			},
			{
				name: 'guangdong',
				value: '广东'
			},
			{
				name: 'wuxi',
				value: '无锡'
			}
		]
	},

	onLoad: function(){

	},

	change_color: function(){
		this.setData({
			color: 'red'
		})
	},
	addRow: function(){
		this.extralLine.push('新行：'+(this.extralLine.length+1));
		this.setData({
			text: yuantext+'\n'+this.extralLine.join('\n')
		})
	},
	deleteRow: function(){
		if(this.extralLine.length > 0){
			this.extralLine.pop();
			this.setData({
				text: yuantext+'\n'+this.extralLine.join('\n')
			})
		}
	},
	checkboxchange: function(e){
		console.log(e.detail.value);
	},
	btn_go: function(){
		wx.navigateTo({
			url: '/pages/inpage/inpage',
			success: function(){

			},
			fail: function(){

			},
			complete: function(){

			}
		})
	}

})