import Vue from 'vue'
import Vuex from 'vuex'
import { DO_LOGIN, SET_TOKEN } from './action-types';
import axios from 'axios';

const Http = new Vue();
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    [SET_TOKEN]: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    [DO_LOGIN]: ({ commit }, payload) => {
      return axios.post('http://127.0.0.1:8000/api/login', payload)
        .then((response) => {
          console.log('response success:', response);
        })
        .catch((response) => {
          console.log('response error:', response);
        });
    },
  },
  getters: {
    token: state => state.token,
  },
  modules: {
  }
})
