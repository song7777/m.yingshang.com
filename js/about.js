var about = new Vue({
	el:"#about",
	data:{
		about_us:"",
	},
	created:function(){
		$.ajax({
			type:"post",
			url:"http://xiaoer.yuncentry.com/index.php/api/Platform/about",
			dataType:"json",
			data:{
				
			},
			success:function(data){
				about.about_us = data.about_us;
				about.$nextTick(function(){
					//等
					$('.about_content').find('img').attr('src', 'http://xiaoer.yuncentry.com/uploads/201707281501243765147811.jpg');
				})

			}
		});

		
		
		
	}
	
	
	
	
	
})
