<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<label><text class="star">*</text> 手机号：</label>
			<input class="text phone" v-model="userInfo.tel" />
		</view>
		<view class="text-area">
			<label><text class="star">*</text> 验证码：</label>
			<input class="text" v-model="userInfo.code" />
			<text class="code">获取验证码</text>
			<!-- <button type="default"></button> -->
		</view>
		<view class="text-txt">
			<view class="txt">来访目的（选填）：</view>
			<textarea value="" placeholder="" class="txtContent" />
		</view>
		<button type="primary" @tap="login" class="btnSubmit">提 交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				// 表单校验
				let loginRules = [
					{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
					{name: 'code', required: true, type: 'lengthRange', min: 4, max: 4, errmsg: '请输入正确的验证码'}
				]
				let valLoginRes = this.$validate.validate(this.userInfo, loginRules)
				
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				uni.showToast({
					icon: 'none',
					title: '验证通过'
				})
				
			}
		}
	}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.star {
	color: #ef5656;
}
.logo {
	height: 150rpx;
	width: 150rpx;
	margin-top: 100rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 70rpx;
	border-radius: 6px;
}
.text-area {
	display: flex;
	width: 86%;
	margin: 0 30px;
	margin-bottom: 20px;
	padding-bottom: 12px;
	box-sizing: border-box;
	justify-content: flex-start;
	border-bottom: 1rpx solid #CCCCCC;
}
.text-txt {
	width: 86%;
	margin: 0 30px;
	margin-bottom: 20px;
}
.phone {
	width: 75%;
}
.code {
	border: 1px solid #007aff;
	padding: 2px 6px 0 6px;
	border-radius: 12px;
	color: #007AFF;
	margin-left: auto;
}
.txt {
	width: 100%;
	margin-bottom: 12px;
}
.txtContent {
	width: 100%;
	border: 1px solid #CCCCCC;
	padding: 6px 10px;
	box-sizing: border-box;
}
.btnSubmit {
	width: 86%;
	margin-top: 40px;
}
</style>
