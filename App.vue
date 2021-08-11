<script>
	import {mapMutations} from 'vuex'
	export default {
		methods:{
			...mapMutations(['login'])
		},
		onLaunch: function() {
			console.log('App Launch')
			let userInfo =uni.getStorageInfoSync("userInfo")|| '';
			if(userInfo.id){
				uni.getStorage({
					key:'userInfo',
					success:(res)=>{
						this.login(res.data)
					}
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	

@import url("./common/uni.css");
@import url("./common/common.css");

	/* page,
	view {
		display: flex;
	}

	page {
		display: flex;
		min-height: 100%;
		background-color: #EFEFEF;
	}

	template {
		display: flex;
		flex: 1;
	} */
</style>
