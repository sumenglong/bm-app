<template>
	<view class="content">
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
		
		<view class="hotBox">
			<view class="home-title">热门展馆</view>
			<view class="">
				<scroll-view class="scroll-view" scroll-x="true">
					<view class="scroll-view-item">
						<image class="scroll-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
						<view class="scroll-title">恒生电子企业智慧展示馆</view>
					</view>
					<view class="scroll-view-item">
						<image class="scroll-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
						<view class="scroll-title">恒生电子企业智慧展示馆</view>
					</view>
					<view class="scroll-view-item">
						<image class="scroll-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/8eacecc5-d066-43e1-b5e6-7566c9287712.jpg" mode="aspectFill"></image>
						<view class="scroll-title">恒生电子企业智慧展示馆</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
		
		<view class="hotBox zhutiBox">
			<view class="home-title home-title-t">主题专区</view>
			<view class="">
				<scroll-view class="scroll-view" scroll-x="true">
					<view class="scroll-view-item">
						<image class="scroll-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/7f8880f2-348f-4df6-a623-93c7aa878457.jpg" mode="aspectFill"></image>
						<view class="scroll-title">文博主题</view>
					</view>
					<view class="scroll-view-item">
						<image class="scroll-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/5f2a8a2a-dc18-4c39-ad15-11894b2035be.jpg" mode="aspectFill"></image>
						<view class="scroll-title">科技主题</view>
					</view>
					<view class="scroll-view-item">
						<image class="scroll-img" src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d1651f96-675f-4f57-b9c1-8250ca49c3e0.jpg" mode="aspectFill"></image>
						<view class="scroll-title">城市主题</view>
					</view>		
				</scroll-view>
			</view>
		</view>
		
		<view class="hotBox newsBox">
			<view class="home-title home-title-n">新闻资讯</view>
			<view class="newsListAll">
				<view class="newsList" @click="gotoNews">
					<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/f527ca9e-89ef-4a2c-ad72-3de0c45d0a82.jpg" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">宽创国际作品 | 延安大学校史馆</view>
						<view class="smallTitle">延安大学校史馆布展上经线以时间脉络梳理延大历史沿革，纬线以人文情怀凝炼延大精神内涵。</view>
					</view>
				</view>
				<view class="newsList">
					<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
						<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
					</view>
				</view>
				<view class="newsList">
					<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
						<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
					</view>
				</view>
				<view class="newsList">
					<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
						<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
					</view>
				</view>
				<view class="newsList">
					<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
						<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
					</view>
				</view>
				<view class="newsList">
					<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="newsImg"></image>
					<view class="newsTxt">
						<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
						<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
					</view>
				</view>
				
			</view>
		</view>
		
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
			gotoNews(){
				uni.navigateTo({
					url:"../new/new"

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
