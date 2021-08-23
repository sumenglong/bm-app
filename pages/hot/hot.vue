<template>
	<view class="content">
		<v-tabs v-model="current" :tabs="tabs" :pills="true" line-height="0" activeColor="#fff" @change="changeTab" class="tabList"></v-tabs>
	<view class="full" :style="{'display': display,}">
	<z-swiper
		:autoplay='autoplay'
		:list='list'
		:effect3d='effect3d' 
		:fullScreen='fullScreen' 
		:effect3dMargin='`${effect3dMargin}rpx`' 
		:vertical='vertical'
		:topFloat='topFloat'
		:fotterFloat='fotterFloat'
		:mode='mode'
		:indicatorPos='indicatorPos'
		></z-swiper>
	</view>
		
	
	
		<view class="tabBox">
			<view class="videoBox" v-show="flag">
				<view style="line-height: 55px;width: 100%; color: #FFFFFF;"><text>/n</text> </view>
				<view class="hot-item" @tap="gotoDetail"  v-for="(video,index) in listvideo" :key="index"  :data-videoid="video._id">
					<image class="hot-img" :src="video.video_img" mode="aspectFill"></image>
					<view class="hot-title">{{video.video_name}}</view>
				</view>
				
			</view>
			<view class="liveBox" v-show="flag1">
				<!-- <cu-video class="video" :video_list="videoList"/> -->
			
			 </view>
			<view class="liveBox" v-show="flag2">
				 <view style="line-height: 55px;width: 100%; color: #FFFFFF;"><text>/n</text> </view>
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
	// import indexHeader from '@/components/index-header.vue';
	// import cuVideo from '@/components/cu-video.vue';
	import zSwiper from '@/components/z-swiper/index.vue'
	export default {
		components: {
			// indexHeader,
			// cuVideo
			zSwiper
		},
		data: () => ({
			display:"none",
			  effect3d:false,
			  autoplay:false,
			  vertical:true,
			  fullScreen:true,
			  effect3dMargin:40,
			  topFloat:true,
			  fotterFloat:true, 
			  mode:'none',
			  indicatorPos:'bottomCenter',
			  list:[
				 //  {
					// type:'video',  
					// topTip:'',
					// poster:'https://img2.baidu.com/it/u=2141851239,1037607188&fm=26&fmt=auto&gp=0.jpg',
					// src:'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4',
					// bottomTip:'',
				 //  },
				 //  {
					// type:'video', 
					// currentTime:120,//初始帧时间---默认缓存存储
					// poster:'https://img1.baidu.com/it/u=1297253752,1185196455&fm=26&fmt=auto&gp=0.jpg',
					// src:'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4',
				 //  }
			  ],
			  
			  dotIndex:0,//指示器索引
			  dotFloatIndex:0,//位置指示器索引
			  flag:true,
			  flag1:false,
			  flag2:false,
			  listvideo:[],
			  current: 0,
			  tabs: [
			  	'视频',
			  	'小视频',
			  	'专家说'
			  ],
			  title: 'Hello',
			  //videoList:[]
		}), 
		
		onLoad() {
			this.getvideo()
		},
		
		methods: {
			effect3dMarginMethed(){
					 this.effect3dMargin++
			},
			setTip(type){
					  for(let item of this.list){
						  if(type){
							item.topTip = '顶部提示语'+Math.random()  
						  }else{
							item.bottomTip = '底部部提示语'+Math.random()  
						  } 
					  }
			},
			switchDot(){//指示器样式切换
					  let arr = [ 'round', 'circle',  'default', 'index', 'number', 'none']
					  if(this.dotIndex < arr.length-1) {
						  this.dotIndex++
					  }else{
						  this.dotIndex = 0
					  } 
					  this.mode = arr[5]
			},
			switchDotFLoat(){//指示器位置切换
					  if(this.vertical) {
						  return uni.showToast({
						  	title:'垂直暂支持右侧'
						  })
					  }
					  let arr ='bottomCenter/topLeft/topCenter/topRight/bottomLeft/bottomRight'.split('/')
					  if(this.dotFloatIndex < arr.length-1) {
						  this.dotFloatIndex++
					  }else{
						  this.dotFloatIndex = 0
					  } 
					  this.indicatorPos = arr[this.dotFloatIndex]
			},
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
					  this.display="block";
					  this.getxvideo()
					
				} else if(index==0) {
					this.flag = true;
					 this.flag2=false;
					  this.flag1=false;
					   this.display="none";
					 this.list=[]
				}
				else if(index==2) {
					this.flag1 = false;
					 this.flag2=true;
					  this.flag=false;
					    this.display="none";
						this.list=[]
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
						this.list.push({
							video_id: item._id,
							type:'video', 
							topTip: item.nickname,
							video_describe: item.video_describe,
							poster:item.cover_url,
							src:item.video_url,
							dianzan: item.dianzan,
							bottomTip: item.pinglun,
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

<style lang="scss">
	.full{
		position: relative;
		.btns{
			position: fixed;
			background-color: rgba(255,255,255,0.5);
			z-index: 99999;
			left: 100rpx;
			top: 50rpx;
			right: 100rpx;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			>view{
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				padding: 0 20rpx;
			}
			&.full{
				position: relative;
				left: 0;
				right: 0;
				>view{
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					padding: 0 20rpx;
					background-color: rgba(0,0,0,0.1);
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>

<style>
	
.tabList {
	width: 100%;
	margin: 15px 0;
	padding: 0 15px;
	box-sizing: border-box;
	position: absolute;
	z-index: 999;
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
	padding-left:15px;
	box-sizing: border-box;
	position: absolute;
	z-index: 99;
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
