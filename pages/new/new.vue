<template>
	<view class="center">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index" @tap="openNew" :data-newsid="item._id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.news_img"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.news_name}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.create_date}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				news: []
			};
		},
		onLoad: function() {
			// uni.request({
			// 	url: 'https://unidemo.dcloud.net.cn/api/news',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		console.log(res);
			// 		console.log(JSON.stringify(res));
			// 		this.news = res.data;
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
			db.collection('news')
			  .field('_id,news_name,news_title,news_img,create_date')
			  .get()
			  .then(res => {
				  const list=res.result.data
				  for(var i=0;i<list.length;i++){
				  	var date = new Date(list[i].create_date);
				  	var year = date.getFullYear();
				  	var mon  = date.getMonth()+1;
				  	var day  = date.getDate();
				  	var hours = date.getHours();
				  	var minu = date.getMinutes();
				  	var sec = date.getSeconds();
				  	var trMon = mon<10 ? '0'+mon : mon
				  	var trDay = day<10 ? '0'+day : day
				  	list[i].create_date=year+'-'+trMon+'-'+trDay+' '+hours+":"+minu+":"+sec
				  }
			this.news=res.result.data
			  }).catch(err => {
				    uni.showModal({
				    	content: err.message || '请求服务失败',
				    	showCancel: false
				    })
				})	
			
		},
		methods: {
			openNew(e) {
				var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					// url: '../new/new-info',
					url: '../info/info?newsid='+newsid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},

	}
</script>

<style>
.uni-media-list-text-top {
	height: 18px;
	overflow: hidden;
}
</style>
