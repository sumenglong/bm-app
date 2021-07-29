<template>
	<view class="content">
		<view class="feedBox">
			<text class="feedTitle">问题和意见</text>
			<textarea class="feedTxt" value="" placeholder="请输入..." />
		</view>
		<button type="default">提交</button>
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
.feedBox {
	width: 100%;
}
.feedTitle {
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
	display: flex;
	background-color: #f2f2f2;
	font-size: 16px;
}
.feedTxt {
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
	margin-bottom: 40px;
}
uni-button {
    color: #ffffff;
    background-color: rgb(31, 137, 226);
}
.button-hover {
    color: #ffffff;
    background-color: rgb(31, 137, 226);
}
</style>
