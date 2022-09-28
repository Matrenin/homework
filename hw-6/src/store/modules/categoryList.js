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
    fetchCategoryData ({ commit }) {
      const category = ['Sport', 'Navigation', 'Food', 'Entertaiment']
      commit('SET_CATEGORY_LIST', category)
    }
  }
}
