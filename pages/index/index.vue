<template>
	<view class="content">
		<view class="head-box">
			<!-- <navigator url="../city/city" class="address"><text>{{city}}</text><image src="../../static/xiajiantou.png" mode="" class="xia"></image></navigator> -->
			<view class="head-input" @click="gotoSearch()">
				<image src="../../static/search.png" mode="" class="search-icon"></image>
				<input class="uni-input search-input" confirm-type="search" placeholder="请输入..." />
			</view>
			<!-- <view class="head-sao">
				<image src="../../static/sao.png" mode="" class="sao" @click="sm()"></image>
			</view> -->	
		</view>
		
		<swiper class="swiper" :indicator-dots="true" indicator-color="rgba(225, 225, 225, 225)" indicator-active-color="#1f89e2" :autoplay="true" :interval="5000" :duration="500" :circular="true">
			<swiper-item @tap="gotoitem" v-for="(itemt,index) in listItem" :key="index" :data-itemid="itemt._id">
				<view class="swiper-item">
					<image class="swiper-item-img" :src="itemt.item_img"></image>
					<text class="swiper-title">{{itemt.item_name}}</text>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="hotBox">
			<view class="home-title">热门展馆</view>
			<view class="">
				<scroll-view class="scroll-view" scroll-x="true">
					<view class="scroll-view-item"  @tap="gotoitem" v-for="(itemt,index) in listItemr" :key="index" :data-itemid="itemt._id">
						<image class="scroll-img" :src="itemt.item_img" mode="aspectFill"></image>
						<view class="scroll-title">{{itemt.item_name}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="hotBox zhutiBox">
			<view class="home-title home-title-t">主题专区</view>
			<view class="">
				<scroll-view class="scroll-view" scroll-x="true">
					<view class="scroll-view-item"  v-for="(itemtype,index) in listtype" :key="index" @click="gotoTheme()">
						<image class="scroll-img" mode="aspectFill" :src="itemtype.type_img" ></image>
						<view class="scroll-title">{{itemtype.type_name}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="hotBox newsBox">
			<view class="home-title home-title-n">新闻资讯</view>
			<view class="newsListAll">
				<view class="newsList" @tap="gotoNews"  v-for="(news,index) in listnews" :key="index" :data-newsid="news._id">
					<image :src="news.news_img" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">{{news.news_name}}</view>
						<view class="smallTitle">{{news.news_title}}</view>
					</view>
				</view>
			<view style="size: b5; color: #007AFF;float: right;" @click="gonews">
				<text>查看更多>></text>
			</view>
				<view style="height: 30px;"></view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				listItem:[],
				listItemr:[],
				listtype:[],
				listnews:[],
				city:"上海"
			}
		},
		onLoad: function() {
			uni.getLocation({
				type: 'gcj02',
				geocode:true,
			    success: function (res) {
					this.city= res.address.city;
			        uni.showModal({
			        	content: res.address.city,
			        	showCancel: false
			        })
			    }
			});	
			this.csh();
		},
		methods: {
			csh(){
				db.collection('item')
				  .field('_id,item_name,item_tiele,item_img,item_weight,item_content,visits,create_date')
				  .orderBy('item_weight desc')
				   .limit(6)
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
				  	list[i].create_date=year+'-'+trMon+'-'+trDay
				  }
				this.listItem=res.result.data
				  }).catch(err => {
					    uni.showModal({
					    	content: err.message || '请求服务失败',
					    	showCancel: false
					    })
					})
				
				
				db.collection('item')
				  .field('_id,item_name,item_tiele,item_img,item_weight,item_content,visits,create_date')
				  .orderBy('visits desc')
				  .limit(6)
				  .where("_id !=null")
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
				  	list[i].create_date=year+'-'+trMon+'-'+trDay
					
				  }
				this.listItemr=res.result.data
				  
				  }).catch(err => {
					    uni.showModal({
					    	content: err.message || '请求服务失败',
					    	showCancel: false
					    })
					})
					
			db.collection('items_type')
			  .field('_id,type_name,type_img')
			   .limit(6)
			  .get()
			  .then(res => {
			this.listtype=res.result.data
			  }).catch(err => {
				    uni.showModal({
				    	content: err.message || '请求服务失败',
				    	showCancel: false
				    })
				})	
					
			db.collection('news')
			  .field('_id,news_name,news_title,news_img')
			   .limit(6)
			  .get()
			  .then(res => {
			this.listnews=res.result.data
			  }).catch(err => {
				    uni.showModal({
				    	content: err.message || '请求服务失败',
				    	showCancel: false
				    })
				})	
			
			},
			sm(){
				uni.scanCode({
				    success: function (res) {
						// uni.showModal({
						// 	content: res.result,
						// 	showCancel: false
						// });
				        // console.log('条码类型：' + res.scanType);
				        // console.log('条码内容：' + res.result);
						uni.navigateTo({
							// url: '../new/new-info',
							url: '../item/item?itemid='+res.result,
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
				    }
				});
			},
			gotoitem(e){
				var itemid = e.currentTarget.dataset.itemid
				uni.navigateTo({
					// url: '../new/new-info',
					url: '../item/item?itemid='+itemid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				
			},
			gotoNews(e){
				var newsid = e.currentTarget.dataset.newsid
				uni.navigateTo({
					// url: '../new/new-info',
					url: '../info/info?newsid='+newsid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				
			},
			gonews(){
				uni.navigateTo({
					url:"../new/new",
				
				})
			},
			gotoSearch(){
				uni.navigateTo({
					url:"../search/search",
				})
			},
			gotoTheme(){
				uni.navigateTo({
					url:"../theme/theme",
				})
			}
		}
	}
</script>

<style>
	.content {
		
	}
	.swiper {
		height: 390upx;
		margin-bottom: 30upx;
	}
	.swiper-title {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 120upx;
		line-height: 100upx;
		background-color: rgba(0,0,0,.7);
		text-align: center;
		color: #fff;
		font-size: 14px;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.swiper-item {
		display: block;
		height: 390upx;
		line-height: 390upx;
		text-align: center;
	}
	.swiper-item-img {
		width: 100%;
		display: block;
		height: 100%;
	}
	.head-box {
		background-color: rgb(31, 137, 226);
		color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 0px 20px 15px;
		box-sizing: border-box;
	}
	.address {
		display: flex;
		padding-right: 10px;
	}
	.xia {
		width: 23px;
		height: 23px;
		padding-left: 4px;
	}
	.head-input {
		display: flex;
		width: 96%;
		height: 36px;
		line-height: 36px;
		background-color: #FFFFFF;
		align-items: center;
	}
	.search-icon {
		width: 23px;
		height: 23px;
		padding-left: 8px;
	}
	.search-input {
		width: 380upx;
		padding: 0px 8px;
		color: #222222;
	}
	.head-sao {
		display: flex;
		padding-left: 14px;
	}
	.sao {
		width: 30px;
		height: 30px;
	}
	.hotBox {
		margin-bottom: 15px;
	}
	.home-title {
		font-size: 16px;
		text-align: center;
		padding: 5px 0 25px 0;
		position: relative;
	}
	.home-title:before {
		position: absolute;
		width: 40px;
		height: 2px;
		border-radius: 4px;
		content: ''; 
		left: 45%;
		top: 55%;
		background-color: #adcbf3;
	}
	.scroll-view {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
	    display: inline-block;
		text-align: center;
	    width: 39%;
		padding-left: 15px;
	}
	.scroll-img {
		width: 100%;
		height: 170px;
		border-radius: 4px;
	}
	.scroll-title {
		width: 100%;
		font-size: 12px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}
	.home-title-t:before {
		background-color: #f9c29a;
	}
	.home-title-n:before {
		background-color: #91f8fc;
	}
	.newsListAll {
		padding: 0 15px;
		box-sizing: border-box;
	}
	.newsList {
		display: flex;
		flex-direction: row;
		padding-bottom: 15px;
	}
	.newsImg {
		width: 48%;
		height: 120px;
		border-radius: 4px;
	}
	.newsTxt {
		width: 52%;
		padding-left: 10px;
		box-sizing: border-box;
		font-size: 16px;
	}
	.bigTitle {
		height: 50px;
		overflow: hidden;
	}
	.smallTitle {
		font-size: 12px;
		color: #666;
		height: 63px;
		overflow: hidden;
	}
</style>