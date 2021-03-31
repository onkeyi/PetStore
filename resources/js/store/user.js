
const user = {
  state:{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  mutations:{
    userInfo(state,info){
      state.userInfo = info;
      info ? localStorage.setItem('userInfo', JSON.stringify(info)): '';
    }
  },

  getters : {
    userInfo: (state) => state.userInfo
  }
};
export default user