
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
