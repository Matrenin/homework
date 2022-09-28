import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from './modules/categoryList'
import titleTable from './modules/titleTable'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    totalCosts: (state) => state.paymentsList.reduce((acc, el) => acc + +(el.value), 0)
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT (state, payment) {
      state.paymentsList.unshift(payment)
    }
  },
  actions: {
    fetchData ({ commit }) {
      const data = [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ]
      commit('SET_PAYMENTS_LIST', data)
    }
  },
  modules: {
    categoryList,
    titleTable
  }
})
