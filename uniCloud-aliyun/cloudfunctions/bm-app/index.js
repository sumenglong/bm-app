'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	const collection=db.collection("feedback")
	//event为客户端上传的参数
	//context调用信息和运行状态 获取每次调用得上下文
	console.log(event.uid);
	let res=await collection.add([{//await会在数据库进行操作并返回结果
		uaer_id:event.uid,
		fb_content:event.content
	}])
	
	// let res=await collection.doc("60ab41a1a30ce80001557d0f").remove()//删除
	/* let res=await collection.doc("60ab41a1a30ce80001557d10").update({ //update(id不存在不操作) 、set(id存在更新，不存在添加)
		name:"ahtt"
	}) */
	
	/* let res=await collection.where({name:"ahtt"}).update({ //where指定条件
		name:"ashtt"
	}) */
	/* let res=await collection.where({name:event.name}).get() */
	/* let res=await collection.skip(0).limit(3).get()
	分页查询
	 */
	//let res=await collection.get()
	console.log('操作 : ', JSON.stringify(res));
	
	//返回数据给客户端
	return {
		
	}
};
