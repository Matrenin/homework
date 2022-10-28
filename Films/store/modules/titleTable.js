export default {
  state: {
    titleTable: []
  },
  getters: {
    titleTable: (state) => state.titleTable
  },
  mutations: {
    ADD_TITLE_TABLE (state, title) {
      state.titleTable = title
    }
  },
  actions: {
    addTitleTable ({ commit }) {
      const title = ['#', 'Date', 'Category', 'Value']
      commit('ADD_TITLE_TABLE', title)
    }
  }
}
