<template>
	<view class="content">
		<view  style="text-align: center; width: 100%;">
			<image :src="images" style="width: 99%;"></image>
		</view>
		<view class="name">{{name}}</view>
		<view class="title">{{time}}</view>
		<view class="title">{{title}}</view>
		<view class="art-content">
			
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				name:'',
				title:'',
				images:'',
				strings:'',
				time:''
			};
		},
		
		onLoad:function(e){
			//console.log(JSON.stringify(e));
			//this.titles= e.title
			 uni.setNavigationBarTitle({
				title:""
			 });
			
			this.ll(e.itemid)
			// uni.request({
			// 	url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		this.title =res.data.title;
			// 		uni.setNavigationBarTitle({
			// 			title:res.data.title
			// 		});
			// 		this.strings =res.data.content;
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });	
				
		},
		methods: {
			ll(itemid){
				db.collection('item')
				  .field('_id,item_name,item_title,item_content,item_img,create_date')
				   .where("_id=='"+itemid+"'")
				  .get()
				  .then(res => {
					  const list=res.result.data
					  //console.log(list)
					  this.name= res.result.data[0].item_name
					  this.title=res.result.data[0].item_title
					  this.strings =res.result.data[0].item_content
					  this.images =res.result.data[0].item_img
					  this.time=this.uptime(res.result.data[0].create_date)
					  uni.setNavigationBarTitle({
					  			title: this.name
					   		});
					 
				  }).catch(err => {
					    uni.showModal({
					    	content: err.message || '请求服务失败',
					    	showCancel: false
					    })
					})	
				
			},
			uptime(create_date){
					var date = new Date(create_date);
					var year = date.getFullYear();
					var mon  = date.getMonth()+1;
					var day  = date.getDate();
					var hours = date.getHours();
					var minu = date.getMinutes();
					var sec = date.getSeconds();
					var trMon = mon<10 ? '0'+mon : mon
					var trDay = day<10 ? '0'+day : day
					create_date=year+'-'+trMon+'-'+trDay
					return create_date
			}
			
		}
	}
</script>

<style>
.content {
	padding: 15px;
	width: 100%;
	box-sizing: border-box;
	
}
.name {
	font-size: 18px;
	text-align: center;
	margin-bottom: 15px;
}
.art-content {
	color: #666;
}
.title{
	font-size: 15px;
	color: #999999;
	text-align: center;
}

</style>
