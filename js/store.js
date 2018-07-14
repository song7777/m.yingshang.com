var store = new Vue({
	el:"#store",
	
	data:{
		item:"",
		items:[],
		good:"",
		goods:[],
	},
	created:function(){
		//轮播
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/index/advert",
			dataType:"json",
			success:function(data){
				console.log(data)
				var Array = data.data;
				store.items = Array.length;
				store.item = Array;
				
				store.$nextTick(function(){
					
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
			}
			
		});
		//商品
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/index/menuRecommend",
			dataType:"json",
			success:function(data){
				console.log(data)
				var Array = data.data;
				store.goods = Array.length;
				store.good= Array;
//				console.log(store.good)
				
			}
			
			
			
			
		})
		
		
	},
	methods:{
		store_click(index){
			$.ajax({
				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/index/menuRecommend",
				dataType:"json",
				success:function(data){
					var Array = data.data;
				    var goods_id = Array[index].goods_id;
				    console.log(goods_id)
					localStorage.setItem('goods_id',JSON.stringify(goods_id));
					$(location).attr("href","goodsDetails.html");
				}
			})
		}
	}
})
