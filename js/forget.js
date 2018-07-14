var forget = new Vue({
	el:"#forget",
	
	data:{
		mobile:"",
		code:"",
		password:"",
		content:"发送短信验证码",
	},
	methods:{
		regi:function(){
			$.ajax({
				type:"get",
				url:"http://xiaoer.yuncentry.com/index.php/api/users/resetPassword",
				dataType:"json",
				data:{
					mobile:this.mobile,
					code:this.code,
					password:this.password,
					
					
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
					forget.content="已发送"
				}
			});
		}
	}
	
	
	
	
	
	
	
	
	
	
})