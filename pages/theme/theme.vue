<template>
	<view class="content">
		<view class="bg">
			<image class="bgImg" src="http://www.broadmesse.com/bm/img/bm_1.jpg" mode=""></image>
		</view>
		<view class="themeBox">
			<view class="themeList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="themeImg"></image>
				<view class="themeTxt">
					<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
					<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
				</view>
			</view>
			<view class="themeList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="themeImg"></image>
				<view class="themeTxt">
					<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
					<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
				</view>
			</view>
			<view class="themeList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="themeImg"></image>
				<view class="themeTxt">
					<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
					<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
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
		methods: {
			
		}
	}
</script>

<style>
.bg {
	width: 100%;
}
.bgImg {
	width: 100%;
}
.themeBox {
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
}
.themeList {
	display: flex;
	flex-direction: row;
	padding-bottom: 15px;
}
.themeImg {
	width: 48%;
	height: 120px;
	border-radius: 4px;
}
.themeTxt {
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
