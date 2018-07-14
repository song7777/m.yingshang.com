var search = new Vue({
	el:"#search",
	data:{
		goods_name:"",
		intro:"",
		shop_price:"",
		list:[],
		lists:'',
	},
	methods:{
		search_click:function(){
//				console.log(this.goods_name)
			$.ajax({

				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/goods/search",
				dataType:'json',
				data:{
					goods_name:this.goods_name
					
				},
				success:function(data){
					console.log(data)
					var Array =data.data;
					search.list= Array;
					var error_code = data.error_code;
					if(error_code>0){
						mui.toast("您搜索的商品不存在")
						return
					}
					if(Array ==null){
						Array.length= 0;
						return
					}
					search.lists =Array.length;
				}
				

				
				
				
		    })
		
			
		
	   },
	   search_click2(index){
		   	$.ajax({
		   		type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/goods/search",
		   		dataType:"json",
		   		data:{
					goods_name:this.goods_name
		   			
		   		},
		   		success:function(data){
		   			
		   			console.log(data)
					var Array = data.data;
		   			var goods_id = Array[index].goods_id;
		   			console.log(goods_id)
		   			localStorage.setItem('goods_id',JSON.stringify(goods_id));
					$(location).attr("href","goodsDetails.html");

		   		}
		   	});
	   }
	   
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
