<template>
	<view class="center">
		<view class="head-box">
			<navigator url="../city/city" class="address">上海<image src="../../static/xiajiantou.png" mode="" class="xia"></image></navigator>
			<view class="head-input">
				<image src="../../static/search.png" mode="" class="search-icon"></image>
				<input class="uni-input search-input" confirm-type="search" placeholder="请输入..." />
			</view>
			<view class="head-sao">
				<image src="../../static/sao.png" mode="" class="sao"></image>
			</view>	
		</view>
		
		<swiper class="swiper" :indicator-dots="true" indicator-color="rgba(225, 225, 225, 225)" indicator-active-color="#1f89e2" :autoplay="true" :interval="5000" :duration="500" :circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/7a144302-47b3-41cf-9a5d-32e367de0eaf.jpg"></image>
					<text class="swiper-title">四川联通华为全球大数据中心</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/7a144302-47b3-41cf-9a5d-32e367de0eaf.jpg"></image>
					<text class="swiper-title">四川联通华为全球大数据中心</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/7a144302-47b3-41cf-9a5d-32e367de0eaf.jpg"></image>
					<text class="swiper-title">四川联通华为全球大数据中心</text>
				</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad: function() {
			
		},
		methods: {

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
