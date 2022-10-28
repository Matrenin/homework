import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmsList: []
  },
  getters: {
    filmsList: (state) => state.filmsList
  },
  mutations: {
    SET_FILMS_LIST (state, films) {
      state.filmsList = films
    }
  },
  actions: {
    fetchFilms ({ commit }) {
      const films = [
        {
          id: 1,
          title: 'Нефть',
          producer: 'Пол Томас Андерсон',
          rating: 7.8,
          genre: 'Драма',
          year: 2007
        },
        {
          id: 2,
          title: 'Заводной апельсин',
          producer: 'Стэнли Кубрик',
          rating: 7.9,
          genre: 'Фантастика, криминал',
          year: 1971
        }
      ]
      commit('SET_FILMS_LIST', films)
    }
  },
  modules: {

  }
})
