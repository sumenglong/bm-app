<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				// titles:'',
				strings:''
			};
		},
		
		onLoad:function(e){
			//console.log(JSON.stringify(e));
			//this.titles= e.title
			uni.setNavigationBarTitle({
				title:"res.data.title"
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					this.title =res.data.title;
					uni.setNavigationBarTitle({
						title:res.data.title
					});
					this.strings =res.data.content;
				},
				fail: () => {},
				complete: () => {}
			});		
		}
	}
</script>

<style>
.content {
	padding: 15px;
	width: 100%;
	box-sizing: border-box;
	
}
.title {
	font-size: 18px;
	text-align: center;
	margin-bottom: 15px;
}
.art-content {
	color: #666;
}

</style>
