var shopCart2 = new Vue({
	el:"#shopCart2",
	data:{
		item:[],
		items:"",
	},
	created:function(){
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/cart/CartList",
			dataType:"json",
			data:{
					access_token:token
					
				},
				success:function(data){
					console.log(data)
					var Array = data.data;
					shopCart2.item = Array;
					shopCart2.items = Array.length;
					
					
//					var cart_id = null;
					//从购物车删除
					shopCart2.$nextTick(function(){
						var CartDel = document.getElementsByClassName("CartDel");
						for(var i = CartDel.length-1; i>= 0; i--){
							CartDel[i].index = i;
							CartDel[i].onclick = function(){

								cart_id = Array[this.index].id;
								console.log(this.index)
								console.log(cart_id)
								$.ajax({
									type:"post",
									url:"http://xiaoer.yuncentry.com/index.php/api/cart/CartDel",
									data:{
										id:cart_id,
										access_token:token,
									},
									dataType:"json",
									success:function(data){
										console.log(data)
										
									}
								});	
								$(this).parent().remove(); //  parents()返祖   返回任意一级父元素。     parent()返回上一级  
//								$(this).parent().css("display","none")
							}
						}
						
					})
					//点击添加减少
					shopCart2.$nextTick(function(){
								$(function(){
									$(".datails_content").each(function(){
							
										$(this).find("div").each(function(){
											$(this).find(".datails_num").each(function(){
												var index = 0;
												//加
												$(this).find("input:nth-of-type(3)").each(function(){
													$(this).click(function(){

														index++;
														$(this).parent().find("input[type='number']").each(function(){
															$(this).val(index);
															
															
														})
														
													})
													
													
												})
												//减
												$(this).find("input:nth-of-type(1)").each(function(){
													
													$(this).click(function(){
														index =$(this). parent().find($("input[type='number']")).val();
														index--;
														if(index<0){
															index=0;
														}
														$(this).parent().find("input[type='number']").each(function(){
															$(this).val(index);
															
														})
														
													})
													
													
												})
												
												
												
											})
											
										})
									})
								
							
								
							   })
	
					
					})
					
					
					
				}
				
		});
		
		
		
		
	}
	
	
	
	
	
	
})
	
	
	
	
	
	
	
	
	
	
	
	