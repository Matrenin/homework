<template>
  <div class="filmFull">
    <h3>{{ film.title }} </h3>
    <p>Режиссер: {{ film.producer }}</p>
    <p>Рейтинг: {{ film.rating }}</p>
    <p>Жанр: {{ film.genre }}</p>
    <p>Год: {{ film.year }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilmPage',
  data: () => ({
    film: ''
  }),
  computed: {
    ...mapGetters(['filmsList'])
  },
  methods: {
    ...mapActions(['fetchFilms'])
  },
  created () {
    this.fetchFilms()
  },
  mounted () {
    const film = this.filmsList.find(el => el.id === +(this.$route.params.id))
    if (film) {
      this.film = film
    }
  }
}
</script>

<style lang="scss">
.filmFull {
  max-width: 900px;
  width: 100%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;
}
</style>
