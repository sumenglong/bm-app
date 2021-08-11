<template>
	<view class="content">
		<view class="feedBox">
			<text class="feedTitle">问题和意见</text>
			<textarea class="feedTxt" v-model="fdcomtent" placeholder="请输入..." />
		</view>
		<button type="default" @click="addfeedback()" >提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uid:"",
				fdcomtent:""
			}
		},
		onLoad:function(e){
			this.uid=e.uid
		},
		methods: {
			addfeedback(){
				if(this.uid!=null&&this.uid.length>0 ){
					console.log(this.fdcomtent)
					uniCloud.callFunction({
						name:"bm-app",
						data:{
							uid:this.uid,
							content:this.fdcomtent
						},
						success(res) {
							uni.showModal({
								content: "反馈成功" || '请求服务失败',
								showCancel: false
							})
						},fail() {
						
						}
					})
				}else{
					uni.showModal({
						content: "请先登录" || '请求服务失败',
						showCancel: false
					})
				}
			}
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
