//vue.js  
var login = new Vue({
	el:"#login",
	data:{
		mobile:'',
		password:''
	},
	methods:{
		log_click:function(){
			$.ajax({
				type:"post",
				url:"http://xiaoer.yuncentry.com/index.php/api/users/login",
				dataType:"json",
				data:{
					user_var:this.mobile,
					password:this.password
				},
				success:function(data){
					console.log(data)
					var error_code = data.error_code;
					if(!login.mobile || !login.password){
					mui.toast("手机号码或密码不能为空");
					return;
				}
				if(!/^1[3|4|5|7|8][0-9]{9}$/.test(login.mobile)){
					mui.toast("请输入正确的手机号")
					return;
				}
				if(error_code>0)return;
				var access_token = data.data.access_token;//登录凭证
				localStorage.setItem('token',JSON.stringify(access_token));
				$(location).attr("href","personalcenter.html");
			}
				
			});
			
		}
	}
	
})

