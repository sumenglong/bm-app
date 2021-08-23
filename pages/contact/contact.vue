<template>
	<view class="content contact">
		<view class="contentImg">
			<image :src="img" mode="widthFix"></image>
			<view class="iconewm">
				<image :src="iocn" ></image>
			</view>
			<view class="comname">
				<text>{{cname}}</text>
			</view>
		</view>
		
		
		<view class="contactTxt">
			{{content}}
			</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				cname:"",
				content:"",
				iocn:"",
				img:""
			}
		},
		onLoad:function(){
			var that=this
			uni.getStorage({
			    key: 'userid',
			    success: function (res) {
					uni.showToast({
						icon: res.data,
						title: '验证码已发送请稍后1'
					})
					
					if(res.data){
						that.getcompany()
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
			getcompany(){
				db.collection('company')
					  .field('_id,company_name,company_iocn,company_content,company_img')
					   .where("company_id=='0002'")
					  .get()
					  .then(res => {
						  const list=res.result.data
						  //console.log(list)
						  this.iocn= res.result.data[0].company_iocn
						  this.cname =res.result.data[0].company_name
						  this.content =res.result.data[0].company_content
						  this.img=res.result.data[0].company_img
					  }).catch(err => {
						    uni.showModal({
						    	content: err.message || '请求服务失败',
						    	showCancel: false
						    })
						})	
				}
			}
			
		}
	
</script>

<style>
.contact {
	padding: 0 15px;
	box-sizing: border-box;
}
.contentImg {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px 0;
}
.contactTxt {
	font-size: 14px;
	padding-bottom: 30px;
}
.iconewm{
	position: absolute;
	
}
.iconewm image{
	width: 200px;
	height: 200px;
	text-align: center;
}
.comname{
	position: absolute;
	top: 270px;
}
</style>
