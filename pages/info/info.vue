<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<view class="art-content">
			<image :src="images"></image>
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				title:'',
				images:'',
				strings:''
			};
		},
		
		onLoad:function(e){
			//console.log(JSON.stringify(e));
			//this.titles= e.title
			 uni.setNavigationBarTitle({
				title:"res.data.title"
			 });
			
			this.ll(e.newsid)
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
			ll(newsid){
				db.collection('news')
				  .field('_id,news_name,news_title,news_content,news_img,create_date')
				   .where("_id=='"+newsid+"'")
				  .get()
				  .then(res => {
					  const list=res.result.data
					  //console.log(list)
					  this.title= res.result.data[0].news_name
					  this.strings =res.result.data[0].news_content
					  this.images =res.result.data[0].news_img
					  uni.setNavigationBarTitle({
					  			title: this.title
					   		});
					 
				  }).catch(err => {
					    uni.showModal({
					    	content: err.message || '请求服务失败',
					    	showCancel: false
					    })
					})	
				
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
.title {
	font-size: 18px;
	text-align: center;
	margin-bottom: 15px;
}
.art-content {
	color: #666;
}

</style>
