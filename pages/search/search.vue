<template>
	<view class="content">
		<view class="bg">
			<view class="head-input">
				<image src="../../static/search.png" mode="" class="search-icon" @click="gotosearch()"></image>
				<input class="uni-input search-input" confirm-type="search" placeholder="请输入..." v-model="svalue" />
			</view>
		</view>
		<view class="searchBox">
			<view class="searchList" v-for="(item,index) in listitem" :key="index">
				<image :src="item.item_img" mode="aspectFill" class="searchImg"></image>
				<view class="searchTxt">
					<view class="bigTitle">{{item.item_name}}</view>
					<view class="smallTitle">{{item.item_title}}</view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				svalue:"",
				listitem:[]
			}
		},
		onLoad:function(e){
			this.svalue=e.searchvalue
			this.gotosearch()
		},
		methods: {
			gotosearch(){
				if(this.svalue.length>0){
				db.collection('item')
				  .field('_id,item_name,item_title,item_img')
				  .where("/"+this.svalue+"/.test(item_name)")
				  .get()
				  .then(res => {
					this.listitem=res.result.data
				  }).catch(err => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				})
				}
				else{
					db.collection('item')
					  .field('_id,item_name,item_title,item_img')
					  .limit(6)
					  .get()
					  .then(res => {
						this.listitem=res.result.data
					  }).catch(err => {
						uni.showModal({
							content: err.message || '请求服务失败',
							showCancel: false
						})
					})
				}
			}
			//~ "some words"
		}
	}
</script>

<style>
.bg {
	width: 100%;
	background-color: rgb(31, 137, 226);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px 0;
}
.head-input {
	width: 87%;
	padding: 0px 8px;
	color: #222222;
	display: flex;
	height: 36px;
	line-height: 36px;
	background-color: #FFFFFF;
	align-items: center;
}
.search-icon {
	width: 23px;
	height: 23px;
	padding-left: 8px;
}
.uni-input {
    padding: 5px 12px;
}
.searchBox {
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
}
.searchList {
	display: flex;
	flex-direction: row;
	padding-bottom: 15px;
}
.searchImg {
	width: 48%;
	height: 120px;
	border-radius: 4px;
}
.searchTxt {
	width: 52%;
	padding-left: 10px;
	box-sizing: border-box;
	font-size: 16px;
}
.bigTitle {
	height: 50px;
	overflow: hidden;
}
.smallTitle {
	font-size: 12px;
	color: #666;
	height: 63px;
	overflow: hidden;
}
</style>
