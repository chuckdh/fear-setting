import Vue from 'vue';
import Vuex from 'vuex';
import uuidv4 from 'uuid/v4'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connectedClients: 0,
    connected: false,
    fears: {},
    benefits: '',
    cost: ''
  },
  mutations: {
    addFear (state) {
      const id = uuidv4();

      Vue.set(state.fears, id, {
        define: '',
        prevent: '',
        repair: ''
      })
    },
    removeFear (state, id) {
      Vue.delete(state.fears, id);
    },
    setFears (state, fears) {
      state.fears = fears
    },
    updateFear (state, data) {
      Vue.set(state.fears[data.id], data.prop, data.value)
    },
    setBenefits (state, benefits) {
      state.benefits = benefits
    },
    setCost (state, cost) {
      state.cost = cost
    },
    connected (state) {
      state.connected = true
    },
    disconnected (state) {
      state.connected = false
    },
    connectedClients (state, connectedClients) {
      state.connectedClients = connectedClients
    },
  },
  getters: {
    hasCost: state => {
      return state.cost.length > 0;
    },
    hasBenefits: state => {
      return state.benefits.length > 0;
    },
    hasFears: state => {
      return Object.keys(state.fears).length > 0;
    },
    hasEnoughFears: state => {
      return Object.keys(state.fears).length >= 10;
    }
  },
  actions: {
    socket_init: (context, data) => {
      context.commit('connected')

      context.commit('setFears', data.fears)
      context.commit('setCost', data.cost)
      context.commit('setBenefits', data.benefits)
    },
    socket_setFears: (context, fears) => {
      context.commit('setFears', fears)
    },
    socket_setCost: (context, cost) => {
      context.commit('setCost', cost)
    },
    socket_setBenefits: (context, benefits) => {
      context.commit('setBenefits', benefits)
    },
    socket_connectedClients: (context, connectedClients) => {
      context.commit('connectedClients', connectedClients)
    }
}
});