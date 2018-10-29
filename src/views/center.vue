
<template>
	<div class="pages">
		<div class="center">个人中心 </div>
		<div><span v-if="isLogin">欢迎你，{{name}}</span><button v-else="!isLogin" @click="$router.push('/login')">请登录</button></div>
		<button v-if="isLogin" @click="loginOut">退出登录</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		mounted(){
			if(localStorage.getItem('name')==''){
				this.$router.push('/login');
			}
		},
		computed:{
			 isLogin(){
			      if(localStorage.getItem("name")!=''){
			        this.$store.commit("USERSTATUS",localStorage.getItem("name"))
			      }else{
			      	this.$store.commit("USERSTATUS",'')
			      }
			      return this.$store.getters.getIsLogin;
			    },
			name(){
			    	 if(localStorage.getItem("name")){
			        this.$store.commit("USERSTATUS",localStorage.getItem("name"))
			      }
			      return this.$store.getters.getName;
			    }
		},
		methods:{
			loginOut(){
				localStorage.setItem("name",'');
				this.$store.commit("USERSTATUS");
				this.$router.push('/login')
			}
		}
	}
</script>
<style></style>