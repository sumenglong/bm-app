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
		<!-- <view class="text-txt">
			<view class="txt">来访目的（选填）：</view>
			<textarea value="" placeholder="" class="txtContent" />
		</view> -->
		<checkbox-group @change="checkboxChange" class="text-txt">
			<view class="txt"><text class="star">*</text>您此次到访目的/您希望对宽创哪方面增加了解（多选）：</view>
			<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
				<view>
					<checkbox :value="item.value" :checked="item.checked" />
				</view>
				<view>{{item.name}}</view>
			</label>
		</checkbox-group>
		<button type="primary" @tap="login" class="btnSubmit">提 交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				items: [{
						value: 'USA',
						name: '文博展陈'
					},
					{
						value: 'CHN',
						name: '企业展厅'
					},
					{
						value: 'CH',
						name: '文旅开发'
					},
					{
						value: 'BRA',
						name: '投资运营'
					},
					{
						value: 'JPN',
						name: '全球会展'
					},
					{
						value: 'FRA',
						name: '初次到访，全面考察'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			checkboxChange: function (e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if(values.includes(item.value)){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				}
			},
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
	margin-top: 60rpx;
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
	margin: 30px 0 40px 0;
}
.uni-list-cell-pd {
    padding: 15px 15px;
}
</style>
