<template>
	<view class="content">
		<v-tabs v-model="current" :tabs="tabs" :pills="true" line-height="0" activeColor="#fff" @change="changeTab" class="tabList"></v-tabs>
		<view class="tabBox">
			<view class="videoBox" v-show="flag">
				<view class="hot-item" @click="gotoDetail">
					<image class="hot-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
					<view class="hot-title">恒生电子企业智慧展示馆</view>
				</view>
				<view class="hot-item">
					<image class="hot-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
					<view class="hot-title">恒生电子企业智慧展示馆</view>
				</view>
				<view class="hot-item">
					<image class="hot-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
					<view class="hot-title">恒生电子企业智慧展示馆</view>
				</view>
				<view class="hot-item">
					<image class="hot-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
					<view class="hot-title">恒生电子企业智慧展示馆</view>
				</view>
			</view>
			<view class="liveBox" v-show="!flag">
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
	export default {
		data() {
			return {
				flag:true,
				current: 0,
				tabs: [
					'视频',
					'直播'
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			gotoDetail(){
				uni.navigateTo({
					url:"/pages/detail/detail"
		
				})
			},
			changeTab(index) {
				// console.log('当前选中的项：' + index)
				if(index==1) {
					 this.flag = false;
				} else if(index==0) {
					this.flag = true;
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
