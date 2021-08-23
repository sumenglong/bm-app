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
			<text class="code" @click="yzm()">{{xtext}}</text>
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
		const db = uniCloud.database()
	export default {
		data() {
			return {
				xtext:"获取验证码",
				phone:"",
				dsid:"",
				tokenid:"",
				userInfo: {
					tel:"",
					code:""
				},
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
			yzm(){
				//console.log(this.userInfo.tel);
				if(this.xtext=="获取验证码"){
				let loginRules = [
					{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'}
				]
				let valLoginRes = this.$validate.validate(this.userInfo, loginRules)
				if (valLoginRes.isOk) {
					this.phone=this.userInfo.tel
					uni.request({
						url: 'http://test1.broadmesse.net:40005/BM/aliyun/yzm',
						method: 'GET',
						data: {
							phone:this.userInfo.tel
						},
						success: res => {
							console.log(JSON.stringify(res))
							if(res.data.code==200){
								this.tokenid=res.data.data
								this.settext()
								uni.showToast({
									icon: 'none',
									title: '验证发送成功'
								})
							}
							else if(res.data.code==203){
								uni.showModal({
									content: res.data.data || '请求服务失败',
									showCancel: false
								})
							}
							else{
								uni.showModal({
									content: '请求服务失败',
									showCancel: false
								})
							}
						},
						fail: () => {},
						complete: () => {}
					});
					
				}else {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				}else{
					uni.showToast({
						icon: 'none',
						title: '验证码已发送请稍后'
					})
				}
				
			},
			settext(){
				if(this.xtext=="获取验证码"){
					this.xtext=60
					this.dsid=setInterval(this.settext,1000)
					 return
				}
				else if(this.xtext>0){
					this.xtext--
					 return
				}
				else{
					this.xtext="获取验证码"
					clearInterval(this.dsid)
				}
				
			},
			login() {
				// 表单校验
				let loginRules = [
					{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
					{name: 'code', required: true, type: 'lengthRange', min: 6, max: 6, errmsg: '请输入正确的验证码'}
				]
				let valLoginRes = this.$validate.validate(this.userInfo, loginRules)
				
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				else{
					if(this.phone!=this.userInfo.tel){
						uni.showToast({
							icon: 'none',
							title: "两次输入手机号不同"
						})
						return false
						}
					//console.log(JSON.stringify(this.items));
					uni.request({
						url: 'http://test1.broadmesse.net:40005/BM/aliyun/yz',
						method: 'GET',
						data: {
							tokenid:this.tokenid
						},
						success: res => {
							if(res.data.code==200){
								this.sunchuser()
								uni.showToast({
									icon: 'none',
									title: "验证成功"
								})
							}
							else if(res.data.code==203){
								uni.showModal({
									content: res.data.data || '请求服务失败',
									showCancel: false
								})
							}
							else{
								uni.showModal({
									content: '请检查验证码是否失效',
									showCancel: false
								})
							}
						},
						fail: () => {},
						complete: () => {}
					});
					
					
				}
				uni.showToast({
					icon: 'none',
					title: '验证通过'
				})
			},
			sunchuser(){
				// var itemtrue=[];
				// for(var i=0;i<this.items.length;i++){
				// 	if(this.items[i].checked){
				// 		itemtrue
				// 	}
				// }
					db.collection('users')
				  .field('_id,username,nickname,avatar,mobile')
				  .where("mobile=='"+this.userInfo.tel+"'")
				  .get()
				  .then(res => {
				  const list=res.result.data
				 if(list.length==0){
				//创建
				db.collection('users').add({
				nickname:this.userInfo.tel,
				mobile:this.userInfo.tel,
				avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1b34ca82-6f86-4e9e-b658-91a226f442bf/287f4556-a4f1-4679-8d07-aa09253daf45.jpg",
				like_type:this.items,
				last_login_date:new Date().getTime()
				})
				  .then((res) => {
				        //console.log(res);
						uni.showToast({
							icon: 'none',
							title: '注册成功'
						})
				        uni.setStorage({
				        	key: 'userid',
				        	data: res.result.id,
				        	success: function () {
				        		//console.log('success');
				        		uni.reLaunch({
				        		    url: '../index/index'
				        		});
				        	}
				        });
				      })
				      .catch((err) => {
				          uni.showModal({
				              content: err.message || '注册失败',
				              showCancel: false
				          })
				      })
				      .finally(() => {
				      })
				 }
				 else{
					 uni.setStorage({
					     key: 'userid',
					     data: list[0]._id,
					     success: function () {
					 		uni.reLaunch({
					 		    url: '../index/index'
					 		});
					         console.log('success')
					     }
					 })
				
				 }
				//this.listItemr=res.result.data
				  
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
	font-size: 11px;
	
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
