var myFavorite = new Vue({
	
	el:"#myFavorite",
	data:{
		item:[],
		items:"",
	},
	created:function(){
		//alert(123)
		console.log(token)
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/Collection/usersCollect",
			dataType:"json",
			data:{
				access_token:token
			},
			success:function(data){
				console.log(data)
				var Array = data.data;
				myFavorite.item = Array;
				myFavorite.items = Array.length;

				//加入购物车
					myFavorite.$nextTick(function(){
						var CartDel = document.getElementsByClassName("CartDel");
						for(var i = CartDel.length-1; i>= 0; i--){
							CartDel[i].index = i;
							CartDel[i].onclick = function(){

								cart_id = Array[this.index].goods_id;
//								console.log(this.index)
								console.log(cart_id)
								$.ajax({
									type:"get",
									url:"http://xiaoer.yuncentry.com/index.php/api/Cart/addcart",
									
									data:{
										goods_id:cart_id,
										access_token:token,
										buy_num:1,
										
									},
									dataType:"json",
									success:function(data){
										console.log(data)
										
									}
								});								
							}
						}
						
					})
			}
		});
		
		
		
		
		
	}
	
})