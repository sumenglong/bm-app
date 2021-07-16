<template>
	<view class="center">
		<view class="head-box">
			<navigator url="../city/city" class="address"><text>{{city}}</text><image src="../../static/xiajiantou.png" mode="" class="xia"></image></navigator>
			<view class="head-input">
				<image src="../../static/search.png" mode="" class="search-icon"></image>
				<input class="uni-input search-input" confirm-type="search" placeholder="请输入..." />
			</view>
			<view class="head-sao">
				<image src="../../static/sao.png" mode="" class="sao" @click="sm()"></image>
			</view>	
		</view>
		
		<swiper class="swiper" :indicator-dots="true" indicator-color="rgba(225, 225, 225, 225)" indicator-active-color="#1f89e2" :autoplay="true" :interval="5000" :duration="500" :circular="true">
			<swiper-item v-for="(itemt,index) in listItem" :key="index">
				<view class="swiper-item">
					<image class="swiper-item-img" :src="itemt.item_img"></image>
					<text class="swiper-title">{{itemt.item_name}}</text>
				</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				listItem:[],
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
				  .orderBy('create_date')
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
				
			},
			sm(){
				uni.scanCode({
				    success: function (res) {
						uni.showModal({
							content: res.result,
							showCancel: false
						})
				        // console.log('条码类型：' + res.scanType);
				        // console.log('条码内容：' + res.result);
				    }
				});
			}

		}
	}
</script>

<style>
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
		padding: 10px 15px 20px 15px;
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
	}
	.head-sao {
		display: flex;
		padding-left: 12px;
	}
	.sao {
		width: 30px;
		height: 30px;
	}
</style>
