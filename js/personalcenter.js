var token = JSON.parse(localStorage.getItem('token'))
console.log(token);
var personalcenter = new Vue({
	el:"#personalcenter",
	data:{
		content:"",
		points:"",
		balance:"",
		amountspent:"",
		member:"",
	},
	created:function(){
		$.ajax({
				type:"get",
				url:"http://xiaoer.yuncentry.com/index.php/api/users/UserInfo",
				dataType:"json",
				data:{
					access_token:token
				},
				success:function(data){
					console.log(data)
					var nickname = data.data.nickname;
					var points = data.data.points;
					var balance = data.data.balance;
					var amountspent = data.data.amountspent;
					var member = "超级会员";
					
					personalcenter.content = nickname;
					personalcenter.points = points;
					personalcenter.balance = balance;
					personalcenter.amountspent = amountspent;
					personalcenter.member = member;
					
				}
				
				
				
				
				
			})
	},
	methods:{
		
			
			
			
			
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})