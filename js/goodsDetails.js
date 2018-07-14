var details = new Vue({
	el:"#details",
	data:{
		Index:1,
		img:[],
		imgs:"",
		item:[],
		comments:"",
	},
	created:function(){
		//商品详情
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/goods/getOne",
			dataType:"json",
			data:{
				goods_id:goods_id
			},
			success:function(data){
				console.log(data)
				var Array = data.data;
				details.item = Array;
				var img =[Array.img_one,Array.img_two,Array.img_three];
				details.imgs = img.length;
				details.img = img;
				
				//用户评论
				$.ajax({
					type:"post",
					url:"http://xiaoer.yuncentry.com/index.php/api/goods/comment",
					dataType:"json",
					data:{
						page:details.Index
					},
					success:function(data){
						console.log(data)
						var Array = data.data[0];
						details.comments = Array;
	
					}
				})
			
				//轮播
				details.$nextTick(function(){
					var mySwiper = new Swiper('.swiper-container', {
							autoplay: {
							    delay: 1000,
							    stopOnLastSlide: false,
							    disableOnInteraction: false,
						    },//可选选项，自动滑动//可选选项，自动滑动
							loop:true,
							pagination: {
						   		 el: '.swiper-pagination',
					        },
				    })
				
				})
				//加入购物车
				details.$nextTick(function(){
						var addCart = document.getElementsByClassName("addCart");
							addCart[0].onclick = function(){
								cart_id = Array.goods_id;
//								console.log(Array)
								console.log(cart_id)
								var that = $(".datails_num").find("input[type='number']").val()
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
//										console.log(data)
										
									}
								});								
							}
						
					
						
					})
				//加入收藏
				details.$nextTick(function(){
						var addCollect = document.getElementsByClassName("addCollect");
							addCollect[0].onclick = function(){
								//cart_id = Array.goods_id;
//								console.log(Array)
								//console.log(cart_id)
								//console.log(goods_id)
								$.ajax({
									type:"post",
									url:"http://xiaoer.yuncentry.com/index.php/api/goods/collect",
									data:{
										goods_id:goods_id,
										access_token:token,
									
									},
									dataType:"json",
									success:function(data){
										console.log(data)
										
									}
								});								
							}
						
					
						
					})
				
				
				
				
				
			}
			
		})
	
	}

})
