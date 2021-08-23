<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title">
				<!-- <text class="nameTxt">宽创国际</text> -->
				<text class="uer-name">Hi，{{login ? uerInfo.name : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<!-- <view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">收藏图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">收藏图集</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view> -->
		<view class="center-list">
			<!-- <view class="center-list-item border-bottom">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text" @click="gotoMyvideo()">补充信息</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view> -->
			<!-- <view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">上传图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view> -->
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="gotoFeedback()">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">反馈中心</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe609;</text>
				<navigator url="../contact/contact" class="list-text">联系我们</navigator>
				<!-- <text class="list-text">联系我们</text> -->
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				login:false,
				avatarUrl:"../../static/logo.png",
				uerInfo:{}
			}
		},
		onLoad:function(e){
				 var that=this
				uni.getStorage({
				    key: 'userid',
				    success: function (res) {
						if(res.data){
							 console.log(res.data);
							that.getuser(res.data)
						}else{
							
							uni.reLaunch({
							    url: '../login/login'
							});
						}
				    },
					complete :function (res) {
					if(res.errMsg=="getStorage:fail"){
						uni.reLaunch({
						    url: '../login/login'
						});
					}
						
					}
				});
		},
		methods: {
			getuser(id){
				db.collection('users')
					  .field('_id,username,nickname,avatar')
					   .where("_id=='"+id+"'")
					  .get()
					  .then(res => {
						  const list=res.result.data
						  //console.log(list)
						  this.login= true
						  this.uerInfo={"id":res.result.data[0]._id,"name":res.result.data[0].nickname,"avatarUrl":res.result.data[0].avatar}
					  }).catch(err => {
						    uni.showModal({
						    	content: err.message || '请求服务失败',
						    	showCancel: false
						    })
						})	
				},
			goLogin() {
				// if(!this.login){
				// 	uni.navigateTo({
				// 		url:"../login/login"
				// 	})
				// }
				uni.navigateTo({
					url:"../login/login"
				})
			},
			gotoMyvideo(){
				uni.navigateTo({	
					url:"../myvideo/myvideo"
				})
			},
			gotoFeedback(){
				if(this.uerInfo.id!=null&&this.uerInfo.id.length>0 ){
					uni.navigateTo({
						url:"../feedback/feedback?uid="+this.uerInfo.id
					})
				}else{
					uni.showModal({
						content: "请先登录" || '请求服务失败',
						showCancel: false
					})
				}
				
			},
		}
	}
</script>

<style>
	page,
	view {
	    display: flex;
	}
	page {
	    background-color: #f2f2f2;
	}
	
	.navigator-hover {
		background-color: #fff !important;
		opacity: 1 !important;
	}
	.nameTxt {
		font-size: 16px;
		color: #FFFFFF;
	}
</style>