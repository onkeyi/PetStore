
const user = {
  state:{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  mutations:{
    USER_INFO(state,info){
      state.userInfo = info;
      info ? localStorage.setItem('userInfo', JSON.stringify(info)): '';
    }
  },
  actions:{
    saveUserInfo({ commit },data){
      commit('USER_INFO',data);
    }
  },
  getters : {
    userInfo: (state) => state.userInfo
  }
};
export default user