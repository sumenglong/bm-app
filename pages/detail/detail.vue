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

	const db = uniCloud.database()
	export default {
		data() {
			return {
				url:"",
				name:"",
				content:""
			}
		},
		onLoad:function(e){
			var that=this
			uni.getStorage({
			    key: 'userid',
			    success: function (res) {
					if(res.data){
						that.ll(e.videoid)
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
			getvi(videoid){
				db.collection('video')
				  .field('_id,video_name,video_url,video_content,video_weight,video_visits,create_date')
				   .where("_id=='"+videoid+"'")
				  .get()
				  .then(res => {
					  const list=res.result.data
					  //console.log(list)
					  this.url= res.result.data[0].video_url
					  this.name =res.result.data[0].video_name
					  this.content =res.result.data[0].news_img
					  uni.setNavigationBarTitle({
					  			title: this.title
					   		});
					 
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
