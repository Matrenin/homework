export default {
  state: {
    categoryList: []
  },
  getters: {
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_CATEGORY_LIST (state, category) {
      state.categoryList = category
    }
  },
  actions: {
    fetchCategoryList ({ commit }) {
      const category = ['Sport', 'Navigation', 'Food', 'Entertainment']
      commit('SET_CATEGORY_LIST', category)
    }
  }
}
