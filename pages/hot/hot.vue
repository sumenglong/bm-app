<template>
	<view class="content">
		<v-tabs v-model="current" :tabs="tabs" :pills="true" line-height="0" activeColor="#fff" @change="changeTab" class="tabList"></v-tabs>
		<view class="tabBox">
			<view class="videoBox" v-show="flag">
				
				<view class="hot-item" @click="gotoDetail"  v-for="(video,index) in listvideo" :key="index">
					<image class="hot-img" :src="video.video_img" mode="aspectFill"></image>
					<view class="hot-title">{{video.video_name}}</view>
				</view>
				
			</view>
			<view class="liveBox" v-show="flag1">
				<cu-video class="video" :video_list="videoList"/>
			</view>
			<view class="liveBox" v-show="flag2">
				<view class="hot-item">
					<image class="hot-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/7a144302-47b3-41cf-9a5d-32e367de0eaf.jpg" mode="aspectFill"></image>
					<view class="hot-title">恒生电子企业智慧展示馆</view>
				</view>
				<view class="hot-item">
					<image class="hot-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/7a144302-47b3-41cf-9a5d-32e367de0eaf.jpg" mode="aspectFill"></image>
					<view class="hot-title">恒生电子企业智慧展示馆</view>
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	import indexHeader from '@/components/index-header.vue';
	import cuVideo from '@/components/cu-video.vue';
	export default {
		components: {
			indexHeader,
			cuVideo
		},
		data() {
			return {
				flag:true,
				flag1:false,
				flag2:false,
				listvideo:[],
				current: 0,
				tabs: [
					'视频',
					'小视频',
					'直播'
				],
				title: 'Hello',
				videoList:[
				{"video_id":"111111",
				"nickname":"su",
				"video_describe":"sss",
				"cover_url":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1b34ca82-6f86-4e9e-b658-91a226f442bf/1c88e86f-b2d7-4659-853f-a8536699c133.png",
				"video_url":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1b34ca82-6f86-4e9e-b658-91a226f442bf/b0957eee-2aa5-4806-9e50-ed5eab68bbb7.mp4",
				"dianzan":"11",
				"pinglun":"ss",
				"is_dianzan":true,
				"zhuanfa":"ss",
				"flag":false,
				},{"video_id":"111111",
				"nickname":"ss",
				"video_describe":"ss",
				"cover_url":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1b34ca82-6f86-4e9e-b658-91a226f442bf/1c88e86f-b2d7-4659-853f-a8536699c133.png",
				"video_url":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1b34ca82-6f86-4e9e-b658-91a226f442bf/d8fb4ffa-94f2-4c7b-a1cb-4c95488b0f6f.mp4",
				"dianzan":"11",
				"pinglun":"ss",
				"is_dianzan":true,
				"zhuanfa":"ss",
				"flag":false,
				}]
			}
		},
		onLoad() {
			this.getvideo()
		},
		methods: {
			getvideo(){
				db.collection('video')
				  .field('_id,video_name,video_img,create_date')
				   .orderBy('create_date desc')
				  .get()
				  .then(res => {
					this.listvideo=res.result.data
				  }).catch(err => {
					    uni.showModal({
					    	content: err.message || '请求服务失败',
					    	showCancel: false
					    })
					})	
			},
			gotoDetail(){
				uni.navigateTo({
					url:"/pages/detail/detail"
		
				})
			},
			changeTab(index) {
				// console.log('当前选中的项：' + index)
				if(index==1) {
					 this.flag = false;
					 this.flag1=true;
					  this.flag2=false;
				} else if(index==0) {
					this.flag = true;
					 this.flag2=false;
					  this.flag1=false;
				}
				else if(index==2) {
					this.flag1 = false;
					 this.flag2=true;
					  this.flag=false;
				}
			}
		}
	}
</script>

<style>
.tabList {
	width: 100%;
	margin: 15px 0;
	padding: 0 15px;
	box-sizing: border-box;
}
.tabBox {
	/* background-color: #eee; */
	width: 100%;
	
}
.videoBox,.liveBox {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	padding: 15px 0 0 15px;
	box-sizing: border-box;
}
.hot-item {
	display: inline-block;
	text-align: center;
	width: 45.5%;
	margin-bottom: 15px;
	margin-right: 15px;
	height: 170px;
	position: relative;
}
.hot-img {
	width: 100%;
	height: 170px;
	border-radius: 4px;
}
.hot-title {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 120upx;
	line-height: 120upx;
	background-color: rgba(0,0,0,.7);
	text-align: center;
	color: #fff;
	font-size: 14px;
	overflow: hidden;
}
</style>
