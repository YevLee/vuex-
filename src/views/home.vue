
<template>
	<div class="pages">
		<div class="home">首页 </div>
		<div><span v-if="isLogin">欢迎你，{{name}}</span><button v-else="!isLogin" @click="$router.push('login')">你还未登陆，去登陆</button></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				//isLogin:false,
				//name:""
			}
		},
		  computed:{
		  	//存在登陆名，则登陆状态为true
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
		}
	}
</script>
<style></style>