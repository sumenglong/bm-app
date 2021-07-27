<template>
	<view class="content">
		<view class="detailVideo">
			<video class="videoPer" src="https://test1.broadmesse.net/sn/dang100/123.mp4" controls></video>
		</view>
		<view class="detailTitle">宽创国际作品 | 延安大学校史馆</view>
		<view class="detailTxt">延安大学校史馆布展上经线以时间脉络梳理延大历史沿革，纬线以人文情怀凝炼延大精神内涵。</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

			
		}
	}
</script>

<style>
.detailVideo {
	width: 100%;
}	
.videoPer {
	width: 100%;
}
.detailTitle {
	display: flex;
	justify-content: center;
	font-size: 16px;
	padding: 15px 0;
}
.detailTxt {
	font-size: 14px;
	padding: 0 15px;
}
</style>
