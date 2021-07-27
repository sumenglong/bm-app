<template>
	<view class="content">
		<view class="bg">
			<view class="head-input">
				<image src="../../static/search.png" mode="" class="search-icon"></image>
				<input class="uni-input search-input" confirm-type="search" placeholder="请输入..." />
			</view>
		</view>
		<view class="searchBox">
			<view class="searchList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="searchImg"></image>
				<view class="searchTxt">
					<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
					<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
				</view>
			</view>
			<view class="searchList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="searchImg"></image>
				<view class="searchTxt">
					<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
					<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
				</view>
			</view>
			<view class="searchList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="searchImg"></image>
				<view class="searchTxt">
					<view class="bigTitle">宽创国际作品 | 亿晶光电展厅</view>
					<view class="smallTitle">宽创国际打造亿晶光电展厅以“向阳而生，与光同行”为主题，全面展示完整光伏产业链、国内率先实现垂直一体化生产的面貌。</view>
				</view>
			</view>
			<view class="searchList">
				<image src="http://test1.broadmesse.net:40005/BM-1/2020Web/news_photo/d6656879-17a9-46fa-af55-779f4698d218.jpg" mode="aspectFill" class="searchImg"></image>
				<view class="searchTxt">
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
	background-color: rgb(31, 137, 226);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px 0;
}
.head-input {
	width: 87%;
	padding: 0px 8px;
	color: #222222;
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
.uni-input {
    padding: 5px 12px;
}
.searchBox {
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
}
.searchList {
	display: flex;
	flex-direction: row;
	padding-bottom: 15px;
}
.searchImg {
	width: 48%;
	height: 120px;
	border-radius: 4px;
}
.searchTxt {
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
