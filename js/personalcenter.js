
var personalcenter = new Vue({
	el:"#personalcenter",
	data:{
		Array:[],
		member:"",
	},
	created:function(){
		$.ajax({
				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/users/UserInfo",
				dataType:"json",
				data:{
					access_token:token
				},
				success:function(data){
//					console.log(data)
					personalcenter.Array=data.data;
					personalcenter.member = "超级会员";
					
					
				}
				
				
				
				
				
			})
	},
	
		

	
})