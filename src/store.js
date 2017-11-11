import Vue from 'vue';
import Vuex from 'vuex';
import uuidv4 from 'uuid/v4'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fears: [],
    benefits: '',
    cost: ''
  },
  mutations: {
    addFear (state) {
      state.fears.push({
        id: uuidv4(),
        define: '',
        prevent: '',
        repair: ''
      });
    },
    removeFear (state, fear) {
      state.fears.splice(state.fears.indexOf(fear), 1)
    },
    setBenefits (state, benefits) {
      state.benefits = benefits
    },
    setCost (state, cost) {
      state.cost = cost
    }
  },
  getters: {
    hasCost: state => {
      return state.cost.length > 0;
    },
    hasBenefits: state => {
      return state.benefits.length > 0;
    },
    hasFears: state => {
      return state.fears.length > 0;
    },
    hasEnoughFears: state => {
      return state.fears.length >= 10;
    }
  }
});