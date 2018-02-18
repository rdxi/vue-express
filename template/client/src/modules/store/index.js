import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import types from "./types";
Vue.use(Vuex)


export default new Vuex.Store({
	namespaced: true,
     state: {
    ...state

  },
  getters,
  mutations: {
    ...mutations,
  },
  actions,
	types
})
