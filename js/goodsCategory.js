var Catedory = new Vue({
	
	el:"#Catedory",
	data:{
		Index:1,
		list:[],
		lists:'',
		good:[],
		goods:'',
		
	},
	created:function(){
		//列表
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/goods_cates/catelist",
			dataType:"json",
			success:function(data){
				var Array = data.data;
				Catedory.lists = Array.length;
				Catedory.list = Array;
				
			//商品
				$.ajax({
				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/goods_cates/categoods",
				dataType:"json",
				data:{
					page:Catedory.Index,
				},
				success:function(data){
					var Array = data.data;
					Catedory.goods = Array.length;
					Catedory.good= Array;
					var cart_id = null;

					
					//加入购物车
					Catedory.$nextTick(function(){
						var shoppingcart = document.getElementsByClassName("shoppingcart");
						for(var i = shoppingcart.length-1; i>= 0; i--){
							shoppingcart[i].index = i;
							shoppingcart[i].onclick = function(){
								cart_id = Array[this.index].goods_id;
								console.log(Array)
								console.log(cart_id)
								var that = $(this).parent().find("input[type='number']").val()
								console.log(that)
								$.ajax({
									type:"post",
									url:"http://xiaoer.yuncentry.com/index.php/api/Cart/addcart",
									data:{
										goods_id:cart_id,
										access_token:token,
										buy_num:that,

									},
									
									dataType:"json",
									success:function(data){
										console.log(data)
										console.log(that)
									}
								});								
							}
						}
						
					})
										
					
					//input加减
					Catedory.$nextTick(function(){
								$(function(){
									$(".datails_content").each(function(){
							
										$(this).find("div").each(function(){
											$(this).find(".datails_num").each(function(){
												var index = 0;
												
												//加
												$(this).find("input:nth-of-type(3)").each(function(){
													$(this).click(function(){

														index =$(this). parent().find($("input[type='number']")).val();
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
				})
			}
			
		})
		
	},
	methods:{
		//点击刷新显示当前列表商品
		list_click(index){
			this.Index = index;
			var that = $('.datails_content').find("input[type='number']").val(1);//刷新后右边value重新设置为1
			$.ajax({
				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/goods_cates/categoods",
				dataType:"json",
				data:{
					page:Catedory.Index,	
				},
				success:function(data){
					var Array = data.data;
					Catedory.goods = Array.length;
					Catedory.good= Array;	
					console.log(Catedory.Index)
					
					//添加到购物车
					Catedory.$nextTick(function(){
						var shoppingcart = document.getElementsByClassName("shoppingcart");
						for(var i = shoppingcart.length-1; i>= 0; i--){
							shoppingcart[i].index = i;
							shoppingcart[i].onclick = function(){
								cart_id = Array[this.index].goods_id;

								that = $(this).parent().find("input[type='number']").val();//刷新后右边value重新设置为1
								$.ajax({
									type:"post",
									url:"http://xiaoer.yuncentry.com/index.php/api/Cart/addcart",
									data:{
										goods_id:cart_id,
										access_token:token,
										buy_num:that,
									},
									dataType:"json",
									success:function(data){
//										console.log(data)
//										console.log(Catedory.inputVal)
//										
										
									}
								});								
							}
						}
					
						
					})
					
				
				}
			})
		},
	
	
	
	}
	
})