var register = new Vue({
	el:"#register",
	data:{
		mobile:"",
		code:"",
		password:"",
		passwords:"",
		invitation:"",
		content:"发送短信验证码"
	},
	methods:{
		regi:function(){
			$.ajax({
				type:"get",
				url:"http://xiaoer.yuncentry.com/index.php/api/users/register",
				dataType:"json",
				data:{
					mobile:this.mobile,
					code:this.code,
					password:this.password,
					passwords:this.passwords,
					invitation:this.invitation
				},
				success:function(data){
					console.log(data)
					
				}
			});
			
			
			
		},
		codes:function(){
			$.ajax({
				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/users/code",
				dataType:"json",
				data:{
					mobile:this.mobile,
				},
				success:function(data){
					console.log(data)
					register.content="已发送"
				}
			});
		}
	
	
	}
	
	
	
	
	
})
