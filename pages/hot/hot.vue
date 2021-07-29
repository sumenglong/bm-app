<template>
	<view class="content">
		<v-tabs v-model="current" :tabs="tabs" :pills="true" line-height="0" activeColor="#fff" @change="changeTab" class="tabList"></v-tabs>
		<view class="tabBox">
			<view class="videoBox" v-show="flag">
				
				<view class="hot-item" @tap="gotoDetail"  v-for="(video,index) in listvideo" :key="index"  :data-videoid="video._id">
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
				videoList:[]
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
			gotoDetail(e){
			var videoid = e.currentTarget.dataset.videoid
			uni.navigateTo({
				// url: '../new/new-info',
				url: '../detail/detail?videoid='+videoid,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
			},
			changeTab(index) {
				// console.log('当前选中的项：' + index)
				if(index==1) {
					 this.flag = false;
					 this.flag1=true;
					  this.flag2=false;
					  this.getxvideo()
				} else if(index==0) {
					this.flag = true;
					 this.flag2=false;
					  this.flag1=false;
					   this.videoList=[]
				}
				else if(index==2) {
					this.flag1 = false;
					 this.flag2=true;
					  this.flag=false;
					  this.videoList=[]
				}
			},
			getxvideo(){
				db.collection('small_video')
				  .field('_id,nickname,video_describe,video_url,cover_url,dianzan,pinglun,zhuanfa,flag,is_dianzan,create_date')
				   .orderBy('create_date desc')
				  .get()
				  .then(res => {
					console.log(res.result.data);
					for (let item of res.result.data) {
						this.videoList.push({
							video_id: item._id,
							nickname: item.nickname,
							video_describe: item.video_describe,
							cover_url: item.cover_url,
							video_url: item.video_url,
							dianzan: item.dianzan,
							pinglun: item.pinglun,
							zhuanfa: item.zhuanfa,
							is_dianzan: item.is_dianzan,
							flag: false
						});
					}
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
