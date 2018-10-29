import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const state={
	name:"",
	isLogin:false
}
const getters={
	getName:state=>state.name,
	getIsLogin:state=>state.isLogin
}
const mutations={
  	//登陆和登出
  	USERSTATUS(state,name){
  		if(name){
  			state.name=name;
  			state.isLogin=true;
  		}else if(name==''){
  			localStorage.setItem("name",'');
  			state.isLogin=false
  		}
  	}
}
const actions={
	setUserStatus({commit},name){
		commit("USERSTATUS",name)
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})