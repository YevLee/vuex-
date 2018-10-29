
<template>
	<div class="pages">
		<div class="login">
			<div class="login-ipt">
				<input type="text" placeholder="用户名" v-model="name">
			</div>
			<div class="login-ipt">
				<input type="text" placeholder="密码" v-model="pass">
			</div>
		</div>
		<div><button @click="login">登陆</button></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				name:"",
				pass:""
			}
		},
		methods:{
			login(){
				if(this.name=="" || this.pass==""){
					alert("输入姓名或者密码");
					return false;
				}else{
					alert("登陆成功");
					this.$store.dispatch("setUserStatus",this.name)
					localStorage.setItem("name",this.name);
					this.$router.push('/center');
					console.log(this.$store.state.isLogin)
				}

			}
		}
	}
</script>
<style></style>